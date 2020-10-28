import React from 'react';
import styled from '@emotion/styled';
import { Players } from './gameTypes';
import { removePlayer } from './gameActions';

interface Props {
	players: Players;
	removePlayer: typeof removePlayer;
}

const Button = styled.button`
	color: hotpink;
`;

const PlayerList = ({ players, removePlayer }: Props) => {
	if (!players.allPlayers.length) {
		return <span>'Add a player'</span>;
	}

	return (
		<ul>
			{players.allPlayers.map(playerId => {
				const { color, name } = players.playersById[playerId];
				return (
					<li key={color}>
						{name} - {color}{' '}
						<Button onClick={() => removePlayer(name, color)}>X</Button>
					</li>
				);
			})}
		</ul>
	);
};

export default PlayerList;
