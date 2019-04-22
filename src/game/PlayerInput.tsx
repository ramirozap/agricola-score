import * as React from 'react';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import * as gameActions from './gameActions';
import {
  GameState,
  GameAction,
  Color,
  Player,
  AddPlayerAction
} from './gameTypes';
import PlayerList from './PlayerList';

const { useState, useEffect } = React;

interface PlayerInputProps {
  players: Player[];
  colors: Color[];
  addPlayer(playerName: string, color: Color): AddPlayerAction;
}

const PlayerInput: React.SFC<PlayerInputProps> = ({
  players,
  colors,
  addPlayer
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
  }, [colors.length]);

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
        disabled={players && players.length >= 5}
      >
        Add Player
      </button>
      <PlayerList players={players} />
    </div>
  );
};

const mapStateToProps = (state: GameState) => {
  return {
    players: state.players,
    colors: state.colors
  };
};

const mapDispatchToProps = (dispatch: Dispatch<GameAction>) => {
  return bindActionCreators(gameActions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerInput);
