import { AddPlayerAction, RemovePlayerAction } from '../gameTypes';

export interface Quantities {
	readonly beggarCards: number;
	readonly boars: number;
	readonly bonus: number;
	readonly cards: number;
	readonly cattles: number;
	readonly clayRooms: number;
	readonly familyMembers: number;
	readonly fencedStables: number;
	readonly fields: number;
	readonly grains: number;
	readonly sheeps: number;
	readonly pastures: number;
	readonly stoneRooms: number;
	readonly unusedSpaces: number;
	readonly vegetables: number;
}

export interface QuantitiesSelectors {
	readonly beggarCards: (state: Quantities) => Quantities['beggarCards'];
	readonly boars: (state: Quantities) => Quantities['boars'];
	readonly bonus: (state: Quantities) => Quantities['bonus'];
	readonly cards: (state: Quantities) => Quantities['cards'];
	readonly cattles: (state: Quantities) => Quantities['cattles'];
	readonly clayRooms: (state: Quantities) => Quantities['clayRooms'];
	readonly familyMembers: (state: Quantities) => Quantities['familyMembers'];
	readonly fencedStables: (state: Quantities) => Quantities['fencedStables'];
	readonly fields: (state: Quantities) => Quantities['fields'];
	readonly grains: (state: Quantities) => Quantities['grains'];
	readonly sheeps: (state: Quantities) => Quantities['sheeps'];
	readonly pastures: (state: Quantities) => Quantities['pastures'];
	readonly stoneRooms: (state: Quantities) => Quantities['stoneRooms'];
	readonly unusedSpaces: (state: Quantities) => Quantities['unusedSpaces'];
	readonly vegetables: (state: Quantities) => Quantities['vegetables'];
}

export type QuantitiesKeys = keyof QuantitiesSelectors;

export interface PlayersQuantities {
	[key: string]: Quantities;
}
export interface IncrementQuantityAction {
	type: 'INCREMENT_QUANTITY';
	payload: { key: QuantitiesKeys; playerName: string };
}

export interface DecrementQuantityAction {
	type: 'DECREMENT_QUANTITY';
	payload: { key: QuantitiesKeys; playerName: string };
}

export interface SetQuantityAction {
	type: 'SET_QUANTITY';
	payload: { key: QuantitiesKeys; newQuantity: number; playerName: string };
}

export type QuantityActions =
	| IncrementQuantityAction
	| DecrementQuantityAction
	| SetQuantityAction
	| AddPlayerAction
	| RemovePlayerAction;
