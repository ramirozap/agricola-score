const fields = (total = 0) => {

}

const pastures = (total = 0) => {

}

const grain = (total = 0) => {

}

const vegetables = (total = 0) => {
  let result = -1
  if (total > 0 && total < 5) {
    result = total
  }else if (total > 4) {
    result = 4
  }
  return result
}

const sheeps = (total = 0) => {

}

const boars = (total = 0) => {

}

const cattles = (total = 0) => {
  
}

const unusedSpaces = (total = 0) => total * -1

const fencedStables = (total = 0) => total

const clayRomms = (total = 0) => total

const stoneRooms = (total = 0) => total * 2

const familyMembers = (total = 0) => total * 3

const cardPoints = (total = 0) => total

const bonusPoints = (total = 0) => total

const beggarCards = (total = 0) => total * -3
