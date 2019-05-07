import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
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

const PlayerInput: React.SFC<Props> = ({
  players,
  colors,
  addPlayer,
  removePlayer
}) => {
  const [playerName, setPlayerName] = useState('');
  const [selectedColor, setSelectedColor] = useState(colors[0]);

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

  useEffect(() => {
    setSelectedColor(colors[0]);
  }, [colors]);

  return (
    <div>
      <input type="text" value={playerName} onChange={handleChange} />
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
      <button
        onClick={savePlayer}
        type="button"
        disabled={players && players.allPlayers.length >= 5}
      >
        Add Player
      </button>
      <PlayerList players={players} removePlayer={removePlayer} />
      <Link to="/points/fields">Start Game</Link>
    </div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerInput);
