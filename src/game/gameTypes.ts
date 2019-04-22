export interface AddPlayerAction {
  type: 'ADD_PLAYER';
  payload: { playerName: string; color: string };
}

export interface RemovePlayerAction {
  type: 'REMOVE_PLAYER';
  payload: { playerPosition: number; color: string };
}

type DefaultAction = {
  type: 'DEFAULT';
};

export type GameAction = RemovePlayerAction | AddPlayerAction | DefaultAction;

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
  quantities: Quantities;
}

export type Color = string;

export interface GameState {
  players: Player[];
  colors: Color[];
}
