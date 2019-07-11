import { RootState } from './gameTypes';
import { QuantitiesKeys } from './quantities/quantitiesTypes';

export const getPlayers = (state: RootState) => state.entities.players;
export const getColors = (state: RootState) => state.entities.colors;
export const getQuantities = (state: RootState) => state.entities.quantities;
export const getPlayerQuantities = (state: RootState, name: string) =>
	getQuantities(state)[name];
export const getQuantity = (
	state: RootState,
	quantityType: QuantitiesKeys,
	name: string
): number => getPlayerQuantities(state, name)[quantityType];
