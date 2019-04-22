import { Quantities } from './quantities/quantitiesTypes';

export interface AddPlayerAction {
  type: 'ADD_PLAYER';
  payload: { playerName: string; color: string };
}

export interface RemovePlayerAction {
  type: 'REMOVE_PLAYER';
  payload: { playerPosition: number; color: string };
}

export type DefaultAction = {
  type: 'DEFAULT';
};

export interface GenericAction {
  type: string;
  payload?: { [key: string]: any };
}

export type GameAction = RemovePlayerAction | AddPlayerAction | DefaultAction;

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
