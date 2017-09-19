export const fields = (total = 0) => {
  if (total <= 1) {
    return -1
  }else if (total === 2) {
    return 1
  }else if (total === 3) {
    return 2
  }else if (total === 4) {
    return 3
  }
  return 4
}

export const pasturesVegetables = (total = 0) => {
  if (total >= 1 && total <= 4) {
    return total
  }else if (total > 4) {
    return 4
  }
  return -1
}

export const grainSheeps = (total = 0) => {
  if (total < 1) {
    return -1
  }else if (total >= 1 && total <= 3) {
    return 1
  }else if (total >= 4 && total <= 5) {
    return 2
  }else if (total >= 6 && total <= 7) {
    return 3
  }
  return 4
}

export const boars = (total = 0) => {
  if (total < 1) {
    return -1
  }else if (total >= 1 && total <= 2) {
    return 1
  }else if (total >= 3 && total <= 4) {
    return 2
  }else if (total >= 5 && total <= 6) {
    return 3
  }
  return 4
}

export const cattles = (total = 0) => {
  if (total < 1) {
    return -1
  }else if (total === 1) {
    return 1
  }else if (total >= 2 && total <= 3) {
    return 2
  }else if (total >= 4 && total <= 5) {
    return 3
  }
  return 4
}

export const unusedSpaces = (total = 0) => total * -1

export const fencedStables = (total = 0) => total

export const clayRomms = (total = 0) => total

export const stoneRooms = (total = 0) => total * 2

export const familyMembers = (total = 0) => total * 3

export const cardPoints = (total = 0) => total

export const bonusPoints = (total = 0) => total

export const beggarCards = (total = 0) => total * -3
