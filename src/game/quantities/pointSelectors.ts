import { createSelector, OutputSelector } from 'reselect';
import { Quantities, QuantitiesKeys } from './quantitiesTypes';
import {
  beggarCards,
  fields,
  pastures,
  grains,
  vegetables,
  sheeps,
  boars,
  cattles,
  unusedSpaces,
  fencedStables,
  clayRooms,
  stoneRooms,
  familyMembers,
  bonus,
  cards
} from './quantitiesSelectors';

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
  unusedSpaces > 0 ? unusedSpaces * -1 : 0;

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
  fields,
  fieldsPoints
);

export const getPasturesPoints = createSelector(
  pastures,
  pasturesVegetablesPoints
);

export const getGrainsPoints = createSelector(
  grains,
  grainSheepsPoints
);

export const getVegetablesPoints = createSelector(
  vegetables,
  pasturesVegetablesPoints
);

export const getSheepsPoints = createSelector(
  sheeps,
  grainSheepsPoints
);

export const getBoarsPoints = createSelector(
  boars,
  boarsPoints
);

export const getCattlesPoints = createSelector(
  cattles,
  cattlesPoints
);

export const getUnusedSpacesPoints = createSelector(
  unusedSpaces,
  unusedSpacesPoints
);

export const getFencedStablesPoints = createSelector(
  fencedStables,
  identity
);

export const getClayRoomsPoints = createSelector(
  clayRooms,
  identity
);

export const getStoneRoomsPoints = createSelector(
  stoneRooms,
  stoneRoomsPoints
);

export const getFamilyMembersPoints = createSelector(
  familyMembers,
  familyMembersPoints
);

export const getBonusPoints = createSelector(
  bonus,
  identity
);

export const getCardsPoints = createSelector(
  cards,
  identity
);

export const getBeggarCardsPoints = createSelector(
  beggarCards,
  beggarCardsPoints
);

export const getTotalPoints = createSelector(
  [
    getFieldsPoints,
    getPasturesPoints,
    getGrainsPoints,
    getVegetablesPoints,
    getSheepsPoints,
    getBoarsPoints,
    getCattlesPoints,
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

interface ICalcFunctions {
  [key: string]: OutputSelector<Quantities, number, (res: number) => number>;
}

const calcFunctions: ICalcFunctions = {
  getFieldsPoints,
  getPasturesPoints,
  getGrainsPoints,
  getVegetablesPoints,
  getSheepsPoints,
  getBoarsPoints,
  getCattlesPoints,
  getUnusedSpacesPoints,
  getFencedStablesPoints,
  getClayRoomsPoints,
  getStoneRoomsPoints,
  getFamilyMembersPoints,
  getBonusPoints,
  getCardsPoints,
  getBeggarCardsPoints
};

const capitalize = (type: string) => {
  return type.charAt(0).toUpperCase() + type.slice(1);
};

export const getTypePoints = (
  state: Quantities,
  type: QuantitiesKeys
): number => {
  return calcFunctions[`get${capitalize(type)}Points`](state);
};
