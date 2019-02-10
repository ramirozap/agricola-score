import React from 'react';

interface Player {
  color: string;
  name: string;
}

const PlayerList = ({ players }: { players: Player[] }) => {
  if (!players || !players.length) {
    return <span>'Add a player'</span>;
  }

  return (
    <ul>
      {players.map(({ color, name }: Player) => (
        <li key={color + name}>
          {name} - {color}
        </li>
      ))}
    </ul>
  );
};

export default PlayerList;
