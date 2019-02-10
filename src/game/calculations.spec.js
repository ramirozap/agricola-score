import * as calcs from "./calculations";

describe("Test Scoring functions", () => {
  describe("Test fields scoring function", () => {
    it("should return -1 when no parameters are passed or negatives numbers are passed", () => {
      expect(calcs.fields()).toEqual(-1);
      expect(calcs.fields(-1)).toEqual(-1);
      expect(calcs.fields(0)).toEqual(-1);
    });
    it("should return 1 when a value of 2 is passed", () => {
      expect(calcs.fields(2)).toEqual(1);
    });
    it("should return 2 when a value of 3 is passed", () => {
      expect(calcs.fields(3)).toEqual(2);
    });
    it("should return 3 when a value of 4 is passed", () => {
      expect(calcs.fields(4)).toEqual(3);
    });
    it("should return 4 when a value greater than 4 is passed", () => {
      let bigInt = 99999;
      expect(calcs.fields(bigInt)).toEqual(4);
    });
  });

  describe("Test pastures and vegetables scoring function", () => {
    it("should return -1 when no parameters or numbers lower than 1 are passed", () => {
      expect(calcs.pasturesVegetables()).toEqual(-1);
      expect(calcs.pasturesVegetables(0)).toEqual(-1);
    });
    it("should return 1 when a value of 1 is passed", () => {
      expect(calcs.pasturesVegetables(1)).toEqual(1);
    });
    it("should return 2 when a value of 2 is passed", () => {
      expect(calcs.pasturesVegetables(2)).toEqual(2);
    });
    it("should return 3 when a value of 3 is passed", () => {
      expect(calcs.pasturesVegetables(3)).toEqual(3);
    });
    it("should return 4 when a value greater than 3 is passed", () => {
      let bigInt = 99999;
      expect(calcs.pasturesVegetables(bigInt)).toEqual(4);
    });
  });

  describe("Test grain and sheep scoring function", () => {
    it("should return -1 when no parameters or numbers lower than 1 are passed", () => {
      expect(calcs.grainSheeps()).toEqual(-1);
      expect(calcs.grainSheeps(-1)).toEqual(-1);
      expect(calcs.grainSheeps(0)).toEqual(-1);
    });
    it("should return 1 when a value between 1 and 3 is passed", () => {
      expect(calcs.grainSheeps(1)).toEqual(1);
      expect(calcs.grainSheeps(2)).toEqual(1);
      expect(calcs.grainSheeps(3)).toEqual(1);
    });
    it("should return 2 when a value between 4 and 5 is passed", () => {
      expect(calcs.grainSheeps(4)).toEqual(2);
      expect(calcs.grainSheeps(5)).toEqual(2);
    });
    it("should return 3 when a value between 6 and 7 is is passed", () => {
      expect(calcs.grainSheeps(6)).toEqual(3);
      expect(calcs.grainSheeps(7)).toEqual(3);
    });
    it("should return 4 when a value greater than 7 is passed", () => {
      let bigInt = 99999;
      expect(calcs.grainSheeps(bigInt)).toEqual(4);
    });
  });

  describe("Test boars scoring function", () => {
    it("should return -1 when no parameters or numbers lower than 1 are passed", () => {
      expect(calcs.boars()).toEqual(-1);
      expect(calcs.boars(-1)).toEqual(-1);
      expect(calcs.boars(0)).toEqual(-1);
    });
    it("should return 1 when a value between 1 and 2 is passed", () => {
      expect(calcs.boars(1)).toEqual(1);
      expect(calcs.boars(2)).toEqual(1);
    });
    it("should return 2 when a value between 3 and 4 is passed", () => {
      expect(calcs.boars(3)).toEqual(2);
      expect(calcs.boars(4)).toEqual(2);
    });
    it("should return 3 when a value between 5 and 6 is is passed", () => {
      expect(calcs.boars(5)).toEqual(3);
      expect(calcs.boars(6)).toEqual(3);
    });
    it("should return 4 when a value greater than 6 is passed", () => {
      let bigInt = 99999;
      expect(calcs.boars(bigInt)).toEqual(4);
    });
  });

  describe("Test cattles scoring function", () => {
    it("should return -1 when no parameters or numbers lower than 1 are passed", () => {
      expect(calcs.cattles()).toEqual(-1);
      expect(calcs.cattles(-1)).toEqual(-1);
      expect(calcs.cattles(0)).toEqual(-1);
    });
    it("should return 1 when a value of 1 is passed", () => {
      expect(calcs.cattles(1)).toEqual(1);
    });
    it("should return 2 when a value between 2 and 3 is passed", () => {
      expect(calcs.cattles(2)).toEqual(2);
      expect(calcs.cattles(3)).toEqual(2);
    });
    it("should return 3 when a value between 4 and 5 is is passed", () => {
      expect(calcs.cattles(4)).toEqual(3);
      expect(calcs.cattles(5)).toEqual(3);
    });
    it("should return 4 when a value greater than 5 is passed", () => {
      let bigInt = 99999;
      expect(calcs.cattles(bigInt)).toEqual(4);
    });
  });

  describe("Test unused spaces scoring function", () => {
    it("should return the parameter inverted", () => {
      expect(calcs.unusedSpaces(3)).toEqual(-3);
    });
  });

  describe("Test beggar cards scoring function", () => {
    it("should return the parameter inverted and multiplied by 3", () => {
      expect(calcs.beggarCards(3)).toEqual(-9);
    });
  });

  describe("Test family members scoring function", () => {
    it("should return the parameter multiplied by 3", () => {
      expect(calcs.familyMembers(3)).toEqual(9);
    });
  });

  describe("Test bonus points scoring function", () => {
    it("should return the parameter", () => {
      expect(calcs.bonusPoints(3)).toEqual(3);
    });
  });

  describe("Test card points scoring function", () => {
    it("should return the parameter", () => {
      expect(calcs.cardPoints(3)).toEqual(3);
    });
  });

  describe("Test fenced stables scoring function", () => {
    it("should return the parameter", () => {
      expect(calcs.fencedStables(3)).toEqual(3);
    });
  });

  describe("Test clay romms scoring function", () => {
    it("should return the parameter", () => {
      expect(calcs.clayRomms(3)).toEqual(3);
    });
  });

  describe("Test stone romms scoring function", () => {
    it("should return the parameter multiplied by 2", () => {
      expect(calcs.stoneRooms(3)).toEqual(6);
    });
  });
});
