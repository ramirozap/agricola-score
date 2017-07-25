export function addPlayer(playerName, color) {
  return {
    type: 'ADD_PLAYER',
    playerName,
    color
  }
}

export function removePlayer(playerName) {
  return {
    type: 'REMOVE_PLAYER',
    playerName
  }
}
