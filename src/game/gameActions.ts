export function addPlayer(playerName: string, color: string) {
  return {
    type: 'ADD_PLAYER',
    playerName,
    color
  };
}

export function removePlayer(playerName: string) {
  return {
    type: 'REMOVE_PLAYER',
    playerName
  };
}
