import React from 'react';
import { Player, Color } from './gameTypes';

type Props = {
  players: Player[];
  removePlayer: (color: Color) => void;
};

const PlayerList = ({ players, removePlayer }: Props) => {
  if (!players || !players.length) {
    return <span>'Add a player'</span>;
  }

  return (
    <ul>
      {players.map(({ color, name }: Player) => (
        <li key={color}>
          {name} - {color}{' '}
          <button onClick={() => removePlayer(color)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default PlayerList;
