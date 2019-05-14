import React from 'react';
import { Players } from './gameTypes';
import { removePlayer } from './gameActions';

interface Props {
  players: Players;
  removePlayer: typeof removePlayer;
}

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
            <button onClick={() => removePlayer(name, color)}>X</button>
          </li>
        );
      })}
    </ul>
  );
};

export default PlayerList;
