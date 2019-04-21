import { createSelector } from 'reselect';
import { Quantities } from './gameTypes';

export const selectBeggarCards = (state: Quantities) => state.beggarCards;
export const selectBoars = (state: Quantities) => state.boars;
export const selectBonusPoints = (state: Quantities) => state.bonusPoints;
export const selectCardPoints = (state: Quantities) => state.cardPoints;
export const selectCattles = (state: Quantities) => state.cattles;
export const selectClayRooms = (state: Quantities) => state.clayRooms;
export const selectFamilyMembers = (state: Quantities) => state.familyMembers;
export const selectFencedStables = (state: Quantities) => state.fencedStables;
export const selectFields = (state: Quantities) => state.fields;
export const selectGrains = (state: Quantities) => state.grains;
export const selectSheeps = (state: Quantities) => state.sheeps;
export const selectPastures = (state: Quantities) => state.pastures;
export const selectStoneRooms = (state: Quantities) => state.stoneRooms;
export const selectUnusedSpaces = (state: Quantities) => state.unusedSpaces;
export const selectVegetables = (state: Quantities) => state.vegetables;

const fieldsPoints = (fields: Quantities['fields']) => {
  if (fields <= 1 || !fields) {
    return -1;
  }
  if (fields <= 4) {
    return fields - 1;
  }
  return 4;
};

const pasturesVegetablesPoints = (
  total: Quantities['pastures'] | Quantities['vegetables']
) => {
  if (total <= 0 || !total) {
    return -1;
  }
  if (total < 4) {
    return total;
  }
  return 4;
};

const grainSheepsPoints = (
  total: Quantities['sheeps'] | Quantities['fields']
) => {
  if (total < 1 || !total) {
    return -1;
  }
  if (total <= 3) {
    return 1;
  }
  if (total <= 5) {
    return 2;
  }
  if (total <= 7) {
    return 3;
  }
  return 4;
};

const boarsPoints = (boars: Quantities['boars']) => {
  if (boars < 1 || !boars) {
    return -1;
  }
  if (boars <= 2) {
    return 1;
  }
  if (boars <= 4) {
    return 2;
  }
  if (boars <= 6) {
    return 3;
  }
  return 4;
};

const cattlesPoints = (cattles: Quantities['cattles']) => {
  if (cattles < 1) {
    return -1;
  }
  if (cattles === 1) {
    return 1;
  }
  if (cattles >= 2 && cattles <= 3) {
    return 2;
  }
  if (cattles >= 4 && cattles <= 5) {
    return 3;
  }
  return 4;
};

const unusedSpacesPoints = (unusedSpaces: Quantities['unusedSpaces']) =>
  unusedSpaces * -1;

const identity = (quantity: number) => quantity;

const stoneRoomsPoints = (stoneRooms: Quantities['stoneRooms']) =>
  stoneRooms * 2;

const familyMembersPoints = (familyMembers: Quantities['familyMembers']) =>
  familyMembers * 3;

const beggarCardsPoints = (beggarCards: Quantities['beggarCards']) =>
  beggarCards * -3;

const sum = (...args: number[]) =>
  args.reduce((prev: number, current: number) => current + prev, 0);

export const getFieldsPoints = createSelector(
  selectFields,
  fieldsPoints
);

export const getPasturesPoints = createSelector(
  selectPastures,
  pasturesVegetablesPoints
);

export const getGrainPoints = createSelector(
  selectGrains,
  grainSheepsPoints
);

export const getVegetablesPoints = createSelector(
  selectVegetables,
  pasturesVegetablesPoints
);

export const getCropsPoints = createSelector(
  getGrainPoints,
  getVegetablesPoints,
  sum
);

export const getSheepsPoints = createSelector(
  selectSheeps,
  grainSheepsPoints
);

export const getBoarsPoints = createSelector(
  selectBoars,
  boarsPoints
);

export const getCattlesPoints = createSelector(
  selectCattles,
  cattlesPoints
);

export const getAnimalsPoints = createSelector(
  getSheepsPoints,
  getBoarsPoints,
  getCattlesPoints,
  sum
);

export const getUnusedSpacesPoints = createSelector(
  selectUnusedSpaces,
  unusedSpacesPoints
);

export const getFencedStablesPoints = createSelector(
  selectFencedStables,
  identity
);

export const getClayRoomsPoints = createSelector(
  selectClayRooms,
  identity
);

export const getStoneRoomsPoints = createSelector(
  selectStoneRooms,
  stoneRoomsPoints
);

export const getFamilyMembersPoints = createSelector(
  selectFamilyMembers,
  familyMembersPoints
);

export const getBonusPoints = createSelector(
  selectBonusPoints,
  identity
);

export const getCardsPoints = createSelector(
  selectCardPoints,
  identity
);

export const getBeggarCardsPoints = createSelector(
  selectBeggarCards,
  beggarCardsPoints
);

export const getTotalPoints = createSelector(
  [
    getFieldsPoints,
    getPasturesPoints,
    getCropsPoints,
    getAnimalsPoints,
    getUnusedSpacesPoints,
    getFencedStablesPoints,
    getClayRoomsPoints,
    getStoneRoomsPoints,
    getBonusPoints,
    getFamilyMembersPoints,
    getCardsPoints,
    getBeggarCardsPoints
  ],
  sum
);
