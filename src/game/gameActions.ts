import { AddPlayerAction, RemovePlayerAction, Color } from './gameTypes';

export function addPlayer(playerName: string, color: string): AddPlayerAction {
  return {
    type: 'ADD_PLAYER',
    payload: {
      playerName,
      color
    }
  };
}

export function removePlayer(color: Color): RemovePlayerAction {
  return {
    type: 'REMOVE_PLAYER',
    payload: { color }
  };
}
