import {
  DecrementQuantityAction,
  IncrementQuantityAction,
  SetQuantityAction,
  QuantitiesKeys
} from './quantitiesTypes';

export function increment(key: QuantitiesKeys): IncrementQuantityAction {
  return {
    type: 'INCREMENT_QUANTITY',
    payload: {
      key
    }
  };
}

export function decrement(key: QuantitiesKeys): DecrementQuantityAction {
  return {
    type: 'DECREMENT_QUANTITY',
    payload: { key }
  };
}

export function setQuantity(
  key: QuantitiesKeys,
  newQuantity: number
): SetQuantityAction {
  return {
    type: 'SET_QUANTITY',
    payload: { key, newQuantity }
  };
}
