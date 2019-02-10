import { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as gameActions from './gameActions';
import PlayerList from './PlayerList';

const PlayerInput: React.SFC<any> = props => {
  const [playerName, setPlayerName] = useState('');
  const [availableColors, setAvailableColors] = useState([
    'blue',
    'red',
    'purple',
    'green',
    'white'
  ]);
  const [selectedColor, setSelectedColor] = useState('blue');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(event.target.value);
  };
  const selectColor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedColor(event.target.value);
  };
  const addPlayer = () => {
    props.addPlayer(playerName, selectedColor);
    setPlayerName('');
  };
  return (
    <div>
      <input type="text" value={playerName} onChange={handleChange} />
      <select
        name=""
        id="color-select"
        onChange={selectColor}
        disabled={availableColors.length === 0}
        defaultValue={selectedColor}
      >
        {availableColors.map((color, i) => {
          return (
            <option value={color} key={color}>
              {color}
            </option>
          );
        })}
      </select>
      <button
        onClick={addPlayer}
        type="button"
        disabled={props.players && props.players.length >= 5}
      >
        Add Player
      </button>
      <PlayerList players={props.players} />
    </div>
  );
};

function mapStateToProps(state: any) {
  return {
    players: state.players
  };
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(gameActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerInput);
