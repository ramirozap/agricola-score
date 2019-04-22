import { Quantities, QuantityActions } from './quantitiesTypes';
import { AddPlayerAction } from '../gameTypes';
import { DeepReadonly } from 'deep-freeze';

export const defaultQuantities: DeepReadonly<Quantities> = {
  beggarCards: 0,
  boars: 0,
  bonusPoints: 0,
  cardPoints: 0,
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

export const quantities = (
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
