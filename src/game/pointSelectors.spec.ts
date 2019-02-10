import {
  beggarCardsPoints,
  boarsPoints,
  bonusPoints,
  cardPoints,
  cattlesPoints,
  clayRoomsPoints,
  familyMembersPoints,
  fencedStablesPoints,
  fieldsPoints,
  getTotalPoints,
  grainSheepsPoints,
  pasturesVegetablesPoints,
  stoneRoomsPoints,
  unusedSpacesPoints
} from './pointSelectors';

const bigInt = 99999;

describe('Test Scoring functions', () => {
  describe('Test fieldsPoints scoring function', () => {
    it('should return -1 when no parameters are passed or negatives numbers are passed', () => {
      expect(fieldsPoints()).toEqual(-1);
      expect(fieldsPoints(-1)).toEqual(-1);
      expect(fieldsPoints(0)).toEqual(-1);
    });
    it('should return 1 when a value of 2 is passed', () => {
      expect(fieldsPoints(2)).toEqual(1);
    });
    it('should return 2 when a value of 3 is passed', () => {
      expect(fieldsPoints(3)).toEqual(2);
    });
    it('should return 3 when a value of 4 is passed', () => {
      expect(fieldsPoints(4)).toEqual(3);
    });
    it('should return 4 when a value greater than 4 is passed', () => {
      expect(fieldsPoints(bigInt)).toEqual(4);
    });
  });

  describe('Test pastures and vegetables scoring function', () => {
    it('should return -1 when no parameters or numbers lower than 1 are passed', () => {
      expect(pasturesVegetablesPoints()).toEqual(-1);
      expect(pasturesVegetablesPoints(0)).toEqual(-1);
    });
    it('should return 1 when a value of 1 is passed', () => {
      expect(pasturesVegetablesPoints(1)).toEqual(1);
    });
    it('should return 2 when a value of 2 is passed', () => {
      expect(pasturesVegetablesPoints(2)).toEqual(2);
    });
    it('should return 3 when a value of 3 is passed', () => {
      expect(pasturesVegetablesPoints(3)).toEqual(3);
    });
    it('should return 4 when a value greater than 3 is passed', () => {
      expect(pasturesVegetablesPoints(bigInt)).toEqual(4);
    });
  });

  describe('Test grain and sheep scoring function', () => {
    it('should return -1 when no parameters or numbers lower than 1 are passed', () => {
      expect(grainSheepsPoints()).toEqual(-1);
      expect(grainSheepsPoints(-1)).toEqual(-1);
      expect(grainSheepsPoints(0)).toEqual(-1);
    });
    it('should return 1 when a value between 1 and 3 is passed', () => {
      expect(grainSheepsPoints(1)).toEqual(1);
      expect(grainSheepsPoints(2)).toEqual(1);
      expect(grainSheepsPoints(3)).toEqual(1);
    });
    it('should return 2 when a value between 4 and 5 is passed', () => {
      expect(grainSheepsPoints(4)).toEqual(2);
      expect(grainSheepsPoints(5)).toEqual(2);
    });
    it('should return 3 when a value between 6 and 7 is is passed', () => {
      expect(grainSheepsPoints(6)).toEqual(3);
      expect(grainSheepsPoints(7)).toEqual(3);
    });
    it('should return 4 when a value greater than 7 is passed', () => {
      expect(grainSheepsPoints(bigInt)).toEqual(4);
    });
  });

  describe('Test boarsPoints scoring function', () => {
    it('should return -1 when no parameters or numbers lower than 1 are passed', () => {
      expect(boarsPoints()).toEqual(-1);
      expect(boarsPoints(-1)).toEqual(-1);
      expect(boarsPoints(0)).toEqual(-1);
    });
    it('should return 1 when a value between 1 and 2 is passed', () => {
      expect(boarsPoints(1)).toEqual(1);
      expect(boarsPoints(2)).toEqual(1);
    });
    it('should return 2 when a value between 3 and 4 is passed', () => {
      expect(boarsPoints(3)).toEqual(2);
      expect(boarsPoints(4)).toEqual(2);
    });
    it('should return 3 when a value between 5 and 6 is is passed', () => {
      expect(boarsPoints(5)).toEqual(3);
      expect(boarsPoints(6)).toEqual(3);
    });
    it('should return 4 when a value greater than 6 is passed', () => {
      expect(boarsPoints(bigInt)).toEqual(4);
    });
  });

  describe('Test cattlesPoints scoring function', () => {
    it('should return -1 when no parameters or numbers lower than 1 are passed', () => {
      expect(cattlesPoints()).toEqual(-1);
      expect(cattlesPoints(-1)).toEqual(-1);
      expect(cattlesPoints(0)).toEqual(-1);
    });
    it('should return 1 when a value of 1 is passed', () => {
      expect(cattlesPoints(1)).toEqual(1);
    });
    it('should return 2 when a value between 2 and 3 is passed', () => {
      expect(cattlesPoints(2)).toEqual(2);
      expect(cattlesPoints(3)).toEqual(2);
    });
    it('should return 3 when a value between 4 and 5 is is passed', () => {
      expect(cattlesPoints(4)).toEqual(3);
      expect(cattlesPoints(5)).toEqual(3);
    });
    it('should return 4 when a value greater than 5 is passed', () => {
      expect(cattlesPoints(bigInt)).toEqual(4);
    });
  });

  describe('Test unused spaces scoring function', () => {
    it('should return the parameter inverted', () => {
      const unusedSpaces = 3;
      expect(unusedSpacesPoints({ unusedSpaces })).toEqual(-3);
    });
  });

  describe('Test beggar cards scoring function', () => {
    it('should return the parameter inverted and multiplied by 3', () => {
      const beggarCards = 3;
      expect(beggarCardsPoints({ beggarCards })).toEqual(-9);
    });
  });

  describe('Test family members scoring function', () => {
    it('should return the parameter multiplied by 3', () => {
      const familyMembers = 3;
      expect(familyMembersPoints({ familyMembers })).toEqual(9);
    });
  });

  describe('Test bonus points scoring function', () => {
    it('should return the parameter', () => {
      expect(bonusPoints({ bonusPoints: 3 })).toEqual(3);
    });
  });

  describe('Test card points scoring function', () => {
    it('should return the parameter', () => {
      expect(cardPoints({ cardPoints: 3 })).toEqual(3);
    });
  });

  describe('Test fenced stables scoring function', () => {
    it('should return the parameter', () => {
      const fencedStables = 3;
      expect(fencedStablesPoints({ fencedStables })).toEqual(3);
    });
  });

  describe('Test clay romms scoring function', () => {
    it('should return the parameter', () => {
      const clayRooms = 3;
      expect(clayRoomsPoints({ clayRooms })).toEqual(3);
    });
  });

  describe('Test stone romms scoring function', () => {
    it('should return the parameter multiplied by 2', () => {
      const stoneRooms = 3;
      expect(stoneRoomsPoints({ stoneRooms })).toEqual(6);
    });
  });

  describe('Test the total scoring result', () => {
    it('should return the sum of every point function', () => {
      expect(
        getTotalPoints.resultFunc(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
      ).toEqual(12);
    });
  });
});
