export interface GameAction {
  type: string;
  playerName?: string;
  color?: string;
  playerPosition?: number;
}

export interface Quantities {
  beggarCards: number;
  boarsPoints: number;
  bonusPoints: number;
  cardPoints: number;
  cattlesPoints: number;
  clayRoomsPoints: number;
  familyMembersPoints: number;
  fencedStablesPoints: number;
  fieldsPoints: number;
  grainSheepsPoints: number;
  pasturesVegetablesPoints: number;
  stoneRoomsPoints: number;
  unusedSpacesPoints: number;
}

export interface Player {
  name: string;
  color: string;
  quantities?: Quantities;
}

export interface GameState {
  players: Player[];
}
