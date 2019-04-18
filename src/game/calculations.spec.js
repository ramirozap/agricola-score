import * as calcs from "./calculations";

describe("Test Scoring functions", () => {
  describe("Test fieldsPoints scoring function", () => {
    it("should return -1 when no parameters are passed or negatives numbers are passed", () => {
      expect(calcs.fieldsPoints()).toEqual(-1);
      expect(calcs.fieldsPoints(-1)).toEqual(-1);
      expect(calcs.fieldsPoints(0)).toEqual(-1);
    });
    it("should return 1 when a value of 2 is passed", () => {
      expect(calcs.fieldsPoints(2)).toEqual(1);
    });
    it("should return 2 when a value of 3 is passed", () => {
      expect(calcs.fieldsPoints(3)).toEqual(2);
    });
    it("should return 3 when a value of 4 is passed", () => {
      expect(calcs.fieldsPoints(4)).toEqual(3);
    });
    it("should return 4 when a value greater than 4 is passed", () => {
      let bigInt = 99999;
      expect(calcs.fieldsPoints(bigInt)).toEqual(4);
    });
  });

  describe("Test pastures and vegetables scoring function", () => {
    it("should return -1 when no parameters or numbers lower than 1 are passed", () => {
      expect(calcs.pasturesVegetablesPoints()).toEqual(-1);
      expect(calcs.pasturesVegetablesPoints(0)).toEqual(-1);
    });
    it("should return 1 when a value of 1 is passed", () => {
      expect(calcs.pasturesVegetablesPoints(1)).toEqual(1);
    });
    it("should return 2 when a value of 2 is passed", () => {
      expect(calcs.pasturesVegetablesPoints(2)).toEqual(2);
    });
    it("should return 3 when a value of 3 is passed", () => {
      expect(calcs.pasturesVegetablesPoints(3)).toEqual(3);
    });
    it("should return 4 when a value greater than 3 is passed", () => {
      let bigInt = 99999;
      expect(calcs.pasturesVegetablesPoints(bigInt)).toEqual(4);
    });
  });

  describe("Test grain and sheep scoring function", () => {
    it("should return -1 when no parameters or numbers lower than 1 are passed", () => {
      expect(calcs.grainSheepsPoints()).toEqual(-1);
      expect(calcs.grainSheepsPoints(-1)).toEqual(-1);
      expect(calcs.grainSheepsPoints(0)).toEqual(-1);
    });
    it("should return 1 when a value between 1 and 3 is passed", () => {
      expect(calcs.grainSheepsPoints(1)).toEqual(1);
      expect(calcs.grainSheepsPoints(2)).toEqual(1);
      expect(calcs.grainSheepsPoints(3)).toEqual(1);
    });
    it("should return 2 when a value between 4 and 5 is passed", () => {
      expect(calcs.grainSheepsPoints(4)).toEqual(2);
      expect(calcs.grainSheepsPoints(5)).toEqual(2);
    });
    it("should return 3 when a value between 6 and 7 is is passed", () => {
      expect(calcs.grainSheepsPoints(6)).toEqual(3);
      expect(calcs.grainSheepsPoints(7)).toEqual(3);
    });
    it("should return 4 when a value greater than 7 is passed", () => {
      let bigInt = 99999;
      expect(calcs.grainSheepsPoints(bigInt)).toEqual(4);
    });
  });

  describe("Test boarsPoints scoring function", () => {
    it("should return -1 when no parameters or numbers lower than 1 are passed", () => {
      expect(calcs.boarsPoints()).toEqual(-1);
      expect(calcs.boarsPoints(-1)).toEqual(-1);
      expect(calcs.boarsPoints(0)).toEqual(-1);
    });
    it("should return 1 when a value between 1 and 2 is passed", () => {
      expect(calcs.boarsPoints(1)).toEqual(1);
      expect(calcs.boarsPoints(2)).toEqual(1);
    });
    it("should return 2 when a value between 3 and 4 is passed", () => {
      expect(calcs.boarsPoints(3)).toEqual(2);
      expect(calcs.boarsPoints(4)).toEqual(2);
    });
    it("should return 3 when a value between 5 and 6 is is passed", () => {
      expect(calcs.boarsPoints(5)).toEqual(3);
      expect(calcs.boarsPoints(6)).toEqual(3);
    });
    it("should return 4 when a value greater than 6 is passed", () => {
      let bigInt = 99999;
      expect(calcs.boarsPoints(bigInt)).toEqual(4);
    });
  });

  describe("Test cattlesPoints scoring function", () => {
    it("should return -1 when no parameters or numbers lower than 1 are passed", () => {
      expect(calcs.cattlesPoints()).toEqual(-1);
      expect(calcs.cattlesPoints(-1)).toEqual(-1);
      expect(calcs.cattlesPoints(0)).toEqual(-1);
    });
    it("should return 1 when a value of 1 is passed", () => {
      expect(calcs.cattlesPoints(1)).toEqual(1);
    });
    it("should return 2 when a value between 2 and 3 is passed", () => {
      expect(calcs.cattlesPoints(2)).toEqual(2);
      expect(calcs.cattlesPoints(3)).toEqual(2);
    });
    it("should return 3 when a value between 4 and 5 is is passed", () => {
      expect(calcs.cattlesPoints(4)).toEqual(3);
      expect(calcs.cattlesPoints(5)).toEqual(3);
    });
    it("should return 4 when a value greater than 5 is passed", () => {
      let bigInt = 99999;
      expect(calcs.cattlesPoints(bigInt)).toEqual(4);
    });
  });

  describe("Test unused spaces scoring function", () => {
    it("should return the parameter inverted", () => {
      const unusedSpaces = 3;
      expect(calcs.unusedSpacesPoints({ unusedSpaces })).toEqual(-3);
    });
  });

  describe("Test beggar cards scoring function", () => {
    it("should return the parameter inverted and multiplied by 3", () => {
      const beggarCards = 3;
      expect(calcs.beggarCardsPoints({ beggarCards })).toEqual(-9);
    });
  });

  describe("Test family members scoring function", () => {
    it("should return the parameter multiplied by 3", () => {
      const familyMembers = 3;
      expect(calcs.familyMembersPoints({ familyMembers })).toEqual(9);
    });
  });

  describe("Test bonus points scoring function", () => {
    it("should return the parameter", () => {
      const bonusPoints = 3;
      expect(calcs.bonusPoints({ bonusPoints })).toEqual(3);
    });
  });

  describe("Test card points scoring function", () => {
    it("should return the parameter", () => {
      const cardPoints = 3;
      expect(calcs.cardPoints({ cardPoints })).toEqual(3);
    });
  });

  describe("Test fenced stables scoring function", () => {
    it("should return the parameter", () => {
      const fencedStables = 3;
      expect(calcs.fencedStablesPoints({ fencedStables })).toEqual(3);
    });
  });

  describe("Test clay romms scoring function", () => {
    it("should return the parameter", () => {
      const clayRooms = 3;
      expect(calcs.clayRoomsPoints({ clayRooms })).toEqual(3);
    });
  });

  describe("Test stone romms scoring function", () => {
    it("should return the parameter multiplied by 2", () => {
      const stoneRooms = 3;
      expect(calcs.stoneRoomsPoints({ stoneRooms })).toEqual(6);
    });
  });
});
