export const fields = (total = 0) => {
  if (total <= 1) {
    return -1;
  } else if (total === 2) {
    return 1;
  } else if (total === 3) {
    return 2;
  } else if (total === 4) {
    return 3;
  }
  return 4;
};

export const pasturesVegetables = (total = 0) => {
  if (total >= 1 && total <= 4) {
    return total;
  } else if (total > 4) {
    return 4;
  }
  return -1;
};

export const grainSheeps = (total = 0) => {
  if (total < 1) {
    return -1;
  } else if (total >= 1 && total <= 3) {
    return 1;
  } else if (total >= 4 && total <= 5) {
    return 2;
  } else if (total >= 6 && total <= 7) {
    return 3;
  }
  return 4;
};

export const boars = (total = 0) => {
  if (total < 1) {
    return -1;
  } else if (total >= 1 && total <= 2) {
    return 1;
  } else if (total >= 3 && total <= 4) {
    return 2;
  } else if (total >= 5 && total <= 6) {
    return 3;
  }
  return 4;
};

export const cattles = (total = 0) => {
  if (total < 1) {
    return -1;
  } else if (total === 1) {
    return 1;
  } else if (total >= 2 && total <= 3) {
    return 2;
  } else if (total >= 4 && total <= 5) {
    return 3;
  }
  return 4;
};

export const linearValue = (total = 0) => total;

export const unusedSpaces = (unusedSpaces = 0) => unusedSpaces * -1;

export const fencedStables = linearValue;

export const clayRomms = linearValue;

export const stoneRooms = (stoneRooms = 0) => stoneRooms * 2;

export const familyMembers = (familyMembers = 0) => familyMembers * 3;

export const cardPoints = linearValue;

export const bonusPoints = linearValue;

export const beggarCards = (total = 0) => total * -3;
