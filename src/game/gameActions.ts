import { AddPlayerAction, RemovePlayerAction } from './gameTypes';

export function addPlayer(playerName: string, color: string): AddPlayerAction {
  return {
    type: 'ADD_PLAYER',
    payload: {
      playerName,
      color
    }
  };
}

export function removePlayer(playerPosition: number): RemovePlayerAction {
  return {
    type: 'REMOVE_PLAYER',
    payload: { playerPosition }
  };
}
