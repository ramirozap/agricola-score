import {
	QuantityActions,
	PlayersQuantities
} from './quantities/quantitiesTypes';

export interface AddPlayerAction {
	type: 'ADD_PLAYER';
	payload: { playerName: string; color: Color };
}

export interface RemovePlayerAction {
	type: 'REMOVE_PLAYER';
	payload: { playerName: string; color: Color };
}

export interface DefaultAction {
	type: 'DEFAULT';
}

export interface GenericAction {
	type: string;
	payload?: { [key: string]: any };
}

export type GameAction =
	| RemovePlayerAction
	| AddPlayerAction
	| QuantityActions
	| DefaultAction;

export interface Player {
	name: string;
	color: string;
}

export interface Players {
	playersById: { [key: string]: Player };
	allPlayers: string[];
}

export type Color = string;

export interface RootState {
	entities: {
		readonly colors: Color[];
		readonly players: Players;
		readonly quantities: PlayersQuantities;
	};
}
