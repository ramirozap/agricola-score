import { GameAction, Player, Players } from '../gameTypes';
import { combineReducers } from 'redux';

const defaultPlayers: Players['playersById'] = {};

export const playersById = (state = defaultPlayers, action: GameAction) => {
	switch (action.type) {
		case 'ADD_PLAYER':
			const player: Player = {
				name: action.payload.playerName,
				color: action.payload.color
			};
			return {
				...state,
				[action.payload.playerName]: {
					...player
				}
			};
		case 'REMOVE_PLAYER':
			let newState = { ...state };
			delete newState[action.payload.playerName];
			return newState;
		default:
			return state;
	}
};

type playerIds = string[];

export const allPlayers = (
	state = [] as playerIds,
	action: GameAction
): playerIds => {
	switch (action.type) {
		case 'ADD_PLAYER':
			return [...state, action.payload.playerName];
		case 'REMOVE_PLAYER':
			return state.filter(id => id !== action.payload.playerName);
		default:
			return state;
	}
};

const players = combineReducers({ playersById, allPlayers });

export default players;
