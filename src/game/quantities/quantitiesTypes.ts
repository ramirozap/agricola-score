import { AddPlayerAction } from '../gameTypes';

export interface Quantities {
  readonly beggarCards: number;
  readonly boars: number;
  readonly bonusPoints: number;
  readonly cardPoints: number;
  readonly cattles: number;
  readonly clayRooms: number;
  readonly familyMembers: number;
  readonly fencedStables: number;
  readonly fields: number;
  readonly grains: number;
  readonly sheeps: number;
  readonly pastures: number;
  readonly stoneRooms: number;
  readonly unusedSpaces: number;
  readonly vegetables: number;
}

export type QuantitiesKeys =
  | 'beggarCards'
  | 'boars'
  | 'bonusPoints'
  | 'cardPoints'
  | 'cattles'
  | 'clayRooms'
  | 'familyMembers'
  | 'fencedStables'
  | 'fields'
  | 'grains'
  | 'sheeps'
  | 'pastures'
  | 'stoneRooms'
  | 'unusedSpaces'
  | 'vegetables';

export interface IncrementQuantityAction {
  type: 'INCREMENT_QUANTITY';
  payload: { key: QuantitiesKeys };
}

export interface DecrementQuantityAction {
  type: 'DECREMENT_QUANTITY';
  payload: { key: QuantitiesKeys };
}

export interface SetQuantityAction {
  type: 'SET_QUANTITY';
  payload: { key: QuantitiesKeys; newQuantity: number };
}

export type QuantityActions =
  | IncrementQuantityAction
  | DecrementQuantityAction
  | SetQuantityAction
  | AddPlayerAction;
