import React from "react";

const PlayerList = ({ players }) => {
  let playerList = "Add a player";
  if (players && players.length) {
    players.map((player, i) => (
      <li key={i}>
        {player.name} - {player.color}
      </li>
    ));
  }
  return <ul>{playerList}</ul>;
};

export default PlayerList;
