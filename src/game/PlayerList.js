import React from 'react'

const PlayerList = ({players}) => {
  let playerList = players.map((player, i) => <li key={i}>{player.name} - {player.color}</li>)
  return (
    <ul>
      {playerList}
    </ul>
  )
}

export default PlayerList
