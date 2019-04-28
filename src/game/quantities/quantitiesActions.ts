import {
  DecrementQuantityAction,
  IncrementQuantityAction,
  SetQuantityAction,
  QuantitiesKeys
} from './quantitiesTypes';
import { Color } from '../gameTypes';

export function increment(
  key: QuantitiesKeys,
  color: Color
): IncrementQuantityAction {
  return {
    type: 'INCREMENT_QUANTITY',
    payload: {
      key,
      color
    }
  };
}

export function decrement(
  key: QuantitiesKeys,
  color: Color
): DecrementQuantityAction {
  return {
    type: 'DECREMENT_QUANTITY',
    payload: { key, color }
  };
}

export function setQuantity(
  key: QuantitiesKeys,
  newQuantity: number,
  color: Color
): SetQuantityAction {
  return {
    type: 'SET_QUANTITY',
    payload: { key, newQuantity, color }
  };
}
