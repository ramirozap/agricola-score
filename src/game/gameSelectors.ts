import { RootState } from './gameTypes';

export const getPlayers = (state: RootState) => state.entities.players;
export const getColors = (state: RootState) => state.entities.colors;
export const getQuantities = (state: RootState) => state.entities.quantities;
