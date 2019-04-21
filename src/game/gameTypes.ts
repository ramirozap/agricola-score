export interface AddPlayerAction {
  type: 'ADD_PLAYER';
  payload: { playerName: string; color: string };
}

export interface RemovePlayerAction {
  type: 'REMOVE_PLAYER';
  payload: { playerPosition: number };
}

export type GameAction = RemovePlayerAction | AddPlayerAction;

export interface Quantities {
  beggarCards: number;
  boars: number;
  bonusPoints: number;
  cardPoints: number;
  cattles: number;
  clayRooms: number;
  familyMembers: number;
  fencedStables: number;
  fields: number;
  grains: number;
  sheeps: number;
  pastures: number;
  stoneRooms: number;
  unusedSpaces: number;
  vegetables: number;
}

export interface Player {
  name: string;
  color: string;
  quantities?: Quantities;
}

export interface GameState {
  players: Player[];
}
