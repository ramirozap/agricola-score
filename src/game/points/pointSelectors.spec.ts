import { Quantities } from '../quantities/quantitiesTypes';
import {
  getBeggarCardsPoints,
  getBoarsPoints,
  getBonusPoints,
  getCardsPoints,
  getCattlesPoints,
  getClayRoomsPoints,
  getFamilyMembersPoints,
  getFencedStablesPoints,
  getFieldsPoints,
  getTotalPoints,
  getSheepsPoints,
  getPasturesPoints,
  getGrainsPoints,
  getVegetablesPoints,
  getUnusedSpacesPoints,
  getStoneRoomsPoints,
} from './pointSelectors';

const BIG_INT = 99999;
let baseState: Quantities;

describe('Scoring functions: ', () => {
  beforeEach(() => {
    baseState = {
      beggarCards: 0,
      boars: 0,
      bonus: 0,
      cards: 0,
      cattles: 0,
      clayRooms: 0,
      familyMembers: 0,
      fencedStables: 0,
      fields: 0,
      grains: 0,
      sheeps: 0,
      pastures: 0,
      stoneRooms: 0,
      unusedSpaces: 0,
      vegetables: 0,
    };
  });
  describe('getFieldsPoints', () => {
    it('-1 point when fields are less than 2', () => {
      expect(getFieldsPoints({ ...baseState, fields: -1 })).toEqual(-1);
      expect(getFieldsPoints({ ...baseState, fields: 0 })).toEqual(-1);
    });
    it('1 point when fields are 2', () => {
      expect(getFieldsPoints({ ...baseState, fields: 2 })).toEqual(1);
    });
    it('2 points when fields are 3', () => {
      expect(getFieldsPoints({ ...baseState, fields: 3 })).toEqual(2);
    });
    it('3 points when fields are 4', () => {
      expect(getFieldsPoints({ ...baseState, fields: 4 })).toEqual(3);
    });
    it('4 points when fields are more than 4', () => {
      expect(getFieldsPoints({ ...baseState, fields: BIG_INT })).toEqual(4);
    });
  });

  describe('Pastures and vegetables scoring function', () => {
    it('-1 point when numbers lower than 1 are passed', () => {
      expect(getPasturesPoints({ ...baseState, pastures: 0 })).toEqual(-1);
      expect(getVegetablesPoints({ ...baseState, vegetables: 0 })).toEqual(-1);
    });
    it('1 point when a value of 1 is passed', () => {
      expect(getPasturesPoints({ ...baseState, pastures: 1 })).toEqual(1);
      expect(getVegetablesPoints({ ...baseState, vegetables: 1 })).toEqual(1);
    });
    it('2 points when a value of 2 is passed', () => {
      expect(getPasturesPoints({ ...baseState, pastures: 2 })).toEqual(2);
      expect(getVegetablesPoints({ ...baseState, vegetables: 2 })).toEqual(2);
    });
    it('3 points when a value of 3 is passed', () => {
      expect(getPasturesPoints({ ...baseState, pastures: 3 })).toEqual(3);
      expect(getVegetablesPoints({ ...baseState, vegetables: 3 })).toEqual(3);
    });
    it('4 points when a value greater than 3 is passed', () => {
      expect(getPasturesPoints({ ...baseState, pastures: BIG_INT })).toEqual(4);
      expect(
        getVegetablesPoints({ ...baseState, vegetables: BIG_INT })
      ).toEqual(4);
    });
  });

  describe('grain and sheep scoring functions', () => {
    it('-1 when grain or sheep quantities are lower than 1', () => {
      expect(getSheepsPoints({ ...baseState, sheeps: 0 })).toEqual(-1);
      expect(getGrainsPoints({ ...baseState, grains: 0 })).toEqual(-1);
    });
    it('1 when grain or sheep quantities are between 1 and 3', () => {
      expect(getSheepsPoints({ ...baseState, sheeps: 1 })).toEqual(1);
      expect(getGrainsPoints({ ...baseState, grains: 1 })).toEqual(1);
      expect(getSheepsPoints({ ...baseState, sheeps: 2 })).toEqual(1);
      expect(getGrainsPoints({ ...baseState, grains: 2 })).toEqual(1);
      expect(getSheepsPoints({ ...baseState, sheeps: 3 })).toEqual(1);
      expect(getGrainsPoints({ ...baseState, grains: 3 })).toEqual(1);
    });
    it('2 when grain or sheep quantities are between 4 and 5', () => {
      expect(getSheepsPoints({ ...baseState, sheeps: 4 })).toEqual(2);
      expect(getGrainsPoints({ ...baseState, grains: 4 })).toEqual(2);
      expect(getSheepsPoints({ ...baseState, sheeps: 5 })).toEqual(2);
      expect(getGrainsPoints({ ...baseState, grains: 5 })).toEqual(2);
    });
    it('3 when grain or sheep quantities are between 6 and 7', () => {
      expect(getSheepsPoints({ ...baseState, sheeps: 6 })).toEqual(3);
      expect(getGrainsPoints({ ...baseState, grains: 6 })).toEqual(3);
      expect(getSheepsPoints({ ...baseState, sheeps: 7 })).toEqual(3);
      expect(getGrainsPoints({ ...baseState, grains: 7 })).toEqual(3);
    });
    it('4 when a quantity greater than 7 is passed', () => {
      expect(getSheepsPoints({ ...baseState, sheeps: BIG_INT })).toEqual(4);
      expect(getGrainsPoints({ ...baseState, grains: BIG_INT })).toEqual(4);
    });
  });

  describe('Test getBoarsPoints scoring function', () => {
    it('-1 point when boars are less than 1', () => {
      expect(getBoarsPoints({ ...baseState, boars: -1 })).toEqual(-1);
      expect(getBoarsPoints({ ...baseState, boars: 0 })).toEqual(-1);
    });
    it('1 point when boars are between 1 and 2', () => {
      expect(getBoarsPoints({ ...baseState, boars: 1 })).toEqual(1);
      expect(getBoarsPoints({ ...baseState, boars: 2 })).toEqual(1);
    });
    it('2 points when boars are between 3 and 4', () => {
      expect(getBoarsPoints({ ...baseState, boars: 3 })).toEqual(2);
      expect(getBoarsPoints({ ...baseState, boars: 4 })).toEqual(2);
    });
    it('3 points when boars are between 5 and 6', () => {
      expect(getBoarsPoints({ ...baseState, boars: 5 })).toEqual(3);
      expect(getBoarsPoints({ ...baseState, boars: 6 })).toEqual(3);
    });
    it('4 points when there are more than 6 boars', () => {
      expect(getBoarsPoints({ ...baseState, boars: BIG_INT })).toEqual(4);
    });
  });

  describe('Test getCattlesPoints scoring function', () => {
    it('-1 point when cattles quantity is less than 1', () => {
      expect(getCattlesPoints({ ...baseState, cattles: -1 })).toEqual(-1);
      expect(getCattlesPoints({ ...baseState, cattles: 0 })).toEqual(-1);
    });
    it('1 point when there is 1 cattle', () => {
      expect(getCattlesPoints({ ...baseState, cattles: 1 })).toEqual(1);
    });
    it('2 points when cattles are between 2 and 3', () => {
      expect(getCattlesPoints({ ...baseState, cattles: 2 })).toEqual(2);
      expect(getCattlesPoints({ ...baseState, cattles: 3 })).toEqual(2);
    });
    it('3 points when cattles are between 4 and 5', () => {
      expect(getCattlesPoints({ ...baseState, cattles: 4 })).toEqual(3);
      expect(getCattlesPoints({ ...baseState, cattles: 5 })).toEqual(3);
    });
    it('4 points when cattles are bigger than 5', () => {
      expect(getCattlesPoints({ ...baseState, cattles: BIG_INT })).toEqual(4);
    });
  });

  describe('unused spaces scoring', () => {
    it('the points parameter inverted', () => {
      expect(getUnusedSpacesPoints({ ...baseState, unusedSpaces: 3 })).toEqual(
        -3
      );
    });
    it('the result should be always negative or 0', () => {
      expect(getUnusedSpacesPoints({ ...baseState, unusedSpaces: -6 })).toEqual(
        0
      );
    });
  });

  describe('Test beggar cards scoring function', () => {
    it('the points parameter inverted and multiplied by 3', () => {
      expect(getBeggarCardsPoints({ ...baseState, beggarCards: 3 })).toEqual(
        -9
      );
    });
  });

  describe('Test family members scoring function', () => {
    it('the points parameter multiplied by 3', () => {
      expect(
        getFamilyMembersPoints({ ...baseState, familyMembers: 3 })
      ).toEqual(9);
    });
  });

  describe('Test bonus points scoring function', () => {
    it('the points parameter', () => {
      expect(getBonusPoints({ ...baseState, bonus: 3 })).toEqual(3);
    });
  });

  describe('Test card points scoring function', () => {
    it('the points parameter', () => {
      expect(getCardsPoints({ ...baseState, cards: 3 })).toEqual(3);
    });
  });

  describe('Test fenced stables scoring function', () => {
    it('the points parameter', () => {
      expect(
        getFencedStablesPoints({ ...baseState, fencedStables: 3 })
      ).toEqual(3);
    });
  });

  describe('Test clay rooms scoring function', () => {
    it('the points parameter', () => {
      expect(getClayRoomsPoints({ ...baseState, clayRooms: 3 })).toEqual(3);
    });
  });

  describe('Test stone rooms scoring function', () => {
    it('the points parameter multiplied by 2', () => {
      expect(getStoneRoomsPoints({ ...baseState, stoneRooms: 3 })).toEqual(6);
    });
  });

  describe('Test the total scoring result', () => {
    it('the points sum of every point function', () => {
      expect(
        getTotalPoints.resultFunc(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
      ).toEqual(12);
    });
  });
});
