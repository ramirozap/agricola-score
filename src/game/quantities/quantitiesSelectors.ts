import { Quantities, QuantitiesSelectors } from './quantitiesTypes';

export const beggarCards = (state: Quantities) => state.beggarCards;
export const boars = (state: Quantities) => state.boars;
export const bonus = (state: Quantities) => state.bonus;
export const cards = (state: Quantities) => state.cards;
export const cattles = (state: Quantities) => state.cattles;
export const clayRooms = (state: Quantities) => state.clayRooms;
export const familyMembers = (state: Quantities) => state.familyMembers;
export const fencedStables = (state: Quantities) => state.fencedStables;
export const fields = (state: Quantities) => state.fields;
export const grains = (state: Quantities) => state.grains;
export const sheeps = (state: Quantities) => state.sheeps;
export const pastures = (state: Quantities) => state.pastures;
export const stoneRooms = (state: Quantities) => state.stoneRooms;
export const unusedSpaces = (state: Quantities) => state.unusedSpaces;
export const vegetables = (state: Quantities) => state.vegetables;

const quantitiesSelectors: QuantitiesSelectors = {
	beggarCards,
	boars,
	bonus,
	cards,
	cattles,
	clayRooms,
	familyMembers,
	fencedStables,
	fields,
	grains,
	sheeps,
	pastures,
	stoneRooms,
	unusedSpaces,
	vegetables
};

export default quantitiesSelectors;
