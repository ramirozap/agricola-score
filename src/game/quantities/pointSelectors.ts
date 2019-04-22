import { createSelector } from 'reselect';
import { Quantities } from './quantitiesTypes';
import {
  Fields,
  Pastures,
  Grains,
  Vegetables,
  Sheeps,
  Boars,
  Cattles,
  UnusedSpaces,
  FencedStables,
  ClayRooms,
  StoneRooms,
  FamilyMembers,
  BonusPoints,
  CardPoints,
  BeggarCards
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
  Fields,
  fieldsPoints
);

export const getPasturesPoints = createSelector(
  Pastures,
  pasturesVegetablesPoints
);

export const getGrainPoints = createSelector(
  Grains,
  grainSheepsPoints
);

export const getVegetablesPoints = createSelector(
  Vegetables,
  pasturesVegetablesPoints
);

export const getSheepsPoints = createSelector(
  Sheeps,
  grainSheepsPoints
);

export const getBoarsPoints = createSelector(
  Boars,
  boarsPoints
);

export const getCattlesPoints = createSelector(
  Cattles,
  cattlesPoints
);

export const getUnusedSpacesPoints = createSelector(
  UnusedSpaces,
  unusedSpacesPoints
);

export const getFencedStablesPoints = createSelector(
  FencedStables,
  identity
);

export const getClayRoomsPoints = createSelector(
  ClayRooms,
  identity
);

export const getStoneRoomsPoints = createSelector(
  StoneRooms,
  stoneRoomsPoints
);

export const getFamilyMembersPoints = createSelector(
  FamilyMembers,
  familyMembersPoints
);

export const getBonusPoints = createSelector(
  BonusPoints,
  identity
);

export const getCardsPoints = createSelector(
  CardPoints,
  identity
);

export const getBeggarCardsPoints = createSelector(
  BeggarCards,
  beggarCardsPoints
);

export const getTotalPoints = createSelector(
  [
    getFieldsPoints,
    getPasturesPoints,
    getGrainPoints,
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
