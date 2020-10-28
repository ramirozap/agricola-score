import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import styled from '@emotion/styled';
import * as gameActions from './gameActions';
import { GameAction, Color, RootState, Players } from './gameTypes';
import PlayerList from './PlayerList';
import { Link } from 'react-router-dom';
import { getColors, getPlayers } from './gameSelectors';

const { useState, useEffect } = React;

interface Props {
	players: Players;
	colors: Color[];
	addPlayer: typeof gameActions.addPlayer;
	removePlayer: typeof gameActions.removePlayer;
}

const Button = styled.button``;

const Main = styled.div`
	display: flex;
	flex-direction: column;
	width: 200px;
	align-self: center;
	justify-self: center;
	justify-content: center;
	background: green;
	height: 100%;
`;

const PlayerInput: React.SFC<Props> = ({
	players,
	colors,
	addPlayer,
	removePlayer
}) => {
	const [playerName, setPlayerName] = useState('');
	const [selectedColor, setSelectedColor] = useState(colors[0]);
	const { allPlayers } = players;

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPlayerName(event.target.value);
	};
	const selectColor = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedColor(event.target.value);
	};

	const savePlayer = () => {
		addPlayer(playerName, selectedColor);
		setPlayerName('');
	};

	const isButtonDisabled = () =>
		!playerName ||
		players?.allPlayers.length >= 5 ||
		players.allPlayers.includes(playerName);

	useEffect(() => {
		setSelectedColor(colors[0]);
	}, [colors]);

	return (
		<Main>
			<label htmlFor="player-name">Player Name:</label>
			<input
				id="player-name"
				type="text"
				value={playerName}
				onChange={handleChange}
				disabled={colors.length === 0}
				placeholder={'Uwe'}
			/>
			<select
				name=""
				id="color-select"
				onChange={selectColor}
				disabled={colors.length === 0}
				defaultValue={selectedColor}
			>
				{colors.map((color: Color) => {
					return (
						<option value={color} key={color}>
							{color}
						</option>
					);
				})}
			</select>
			<Button onClick={savePlayer} type="button" disabled={isButtonDisabled()}>
				Add Player
			</Button>
			<PlayerList players={players} removePlayer={removePlayer} />
			<Link to="/points/fields">
				<button disabled={!allPlayers.length}>Start Game</button>
			</Link>
		</Main>
	);
};

const mapStateToProps = (state: RootState) => {
	return {
		players: getPlayers(state),
		colors: getColors(state)
	};
};

const mapDispatchToProps = (dispatch: Dispatch<GameAction>) => {
	return bindActionCreators(gameActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerInput);
