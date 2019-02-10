import { createSelector } from 'reselect';

export const fieldsPoints = (fields = 0) => {
  if (fields <= 1) {
    return -1;
  }
  if (fields <= 4) {
    return fields - 1;
  }
  return 4;
};

export const pasturesVegetablesPoints = (total = 0) => {
  if (total <= 0) {
    return -1;
  }
  if (total < 4) {
    return total;
  }
  return 4;
};

export const grainSheepsPoints = (total = 0) => {
  if (total < 1) {
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

export const boarsPoints = (boars = 0) => {
  if (boars < 1) {
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

export const cattlesPoints = (cattles = 0) => {
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

export const unusedSpacesPoints = ({
  unusedSpaces
}: {
  unusedSpaces: number;
}) => unusedSpaces * -1;

export const fencedStablesPoints = ({
  fencedStables
}: {
  fencedStables: number;
}) => fencedStables;

export const clayRoomsPoints = ({ clayRooms }: { clayRooms: number }) =>
  clayRooms;

export const stoneRoomsPoints = ({ stoneRooms }: { stoneRooms: number }) =>
  stoneRooms * 2;

export const familyMembersPoints = ({
  familyMembers
}: {
  familyMembers: number;
}) => familyMembers * 3;

export const cardPoints = ({ cardPoints }: { cardPoints: number }): number =>
  cardPoints;

export const bonusPoints = ({ bonusPoints }: { bonusPoints: number }) =>
  bonusPoints;

export const beggarCardsPoints = ({ beggarCards }: { beggarCards: number }) =>
  beggarCards * -3;

const sum = (prev: number, current: number) => current + prev;

//todo: compose getTotal points selector, too many parameters

export const getTotalPoints = createSelector(
  beggarCardsPoints,
  boarsPoints,
  bonusPoints,
  cardPoints,
  cattlesPoints,
  clayRoomsPoints,
  familyMembersPoints,
  fencedStablesPoints,
  fieldsPoints,
  grainSheepsPoints,
  pasturesVegetablesPoints,
  stoneRoomsPoints,
  unusedSpacesPoints,
  (...args) => args.reduce(sum, 0)
);
