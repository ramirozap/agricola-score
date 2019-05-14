import {
  Quantities,
  QuantityActions,
  PlayersQuantities
} from './quantitiesTypes';
import { DeepReadonly } from 'deep-freeze';

export const defaultQuantities: DeepReadonly<Quantities> = {
  beggarCards: 0,
  boars: 0,
  bonus: 0,
  cards: 0,
  cattles: 0,
  clayRooms: 0,
  familyMembers: 2,
  fencedStables: 0,
  fields: 0,
  grains: 0,
  sheeps: 0,
  pastures: 0,
  stoneRooms: 0,
  unusedSpaces: 0,
  vegetables: 0
};

export const quantity = (
  state = defaultQuantities,
  action: QuantityActions
) => {
  switch (action.type) {
    case 'INCREMENT_QUANTITY':
      return {
        ...state,
        [action.payload.key]: state[action.payload.key] + 1
      };
    case 'DECREMENT_QUANTITY':
      return {
        ...state,
        [action.payload.key]: state[action.payload.key] - 1
      };
    case 'SET_QUANTITY':
      return {
        ...state,
        [action.payload.key]: action.payload.newQuantity
      };
    default:
      return state;
  }
};

const defaultState: PlayersQuantities = {};

export const playersQuantities = (
  state = defaultState,
  action: QuantityActions
) => {
  switch (action.type) {
    case 'INCREMENT_QUANTITY':
    case 'DECREMENT_QUANTITY':
    case 'SET_QUANTITY':
      return {
        ...state,
        [action.payload.playerName]: {
          ...quantity(state[action.payload.playerName], action)
        }
      };
    case 'ADD_PLAYER':
      return {
        ...state,
        [action.payload.playerName]: {
          ...quantity(undefined, action)
        }
      };
    case 'REMOVE_PLAYER':
      let newState = { ...state };
      delete newState[action.payload.playerName];
      return newState;
    default:
      return state;
  }
};
