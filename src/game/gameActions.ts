import { AddPlayerAction, RemovePlayerAction, Color } from './gameTypes';

export function addPlayer(playerName: string, color: Color): AddPlayerAction {
	return {
		type: 'ADD_PLAYER',
		payload: {
			playerName,
			color
		}
	};
}

export function removePlayer(
	playerName: string,
	color: Color
): RemovePlayerAction {
	return {
		type: 'REMOVE_PLAYER',
		payload: { playerName, color }
	};
}
