import { increment, decrement, setQuantity } from './quantitiesActions';
import {
  IncrementQuantityAction,
  DecrementQuantityAction,
  SetQuantityAction
} from './quantitiesTypes';

describe('Quantities Actions', () => {
  it('action to increment a specific quantity', () => {
    const key = 'cattles';
    const expectedAction: IncrementQuantityAction = {
      type: 'INCREMENT_QUANTITY',
      payload: { key }
    };
    expect(increment(key)).toEqual(expectedAction);
  });
  it('action to decrement a specific quantity', () => {
    const key = 'cattles';
    const expectedAction: DecrementQuantityAction = {
      type: 'DECREMENT_QUANTITY',
      payload: { key }
    };
    expect(decrement(key)).toEqual(expectedAction);
  });
  it('action to set a specific quantity', () => {
    const key = 'cattles';
    const newQuantity = 10;
    const expectedAction: SetQuantityAction = {
      type: 'SET_QUANTITY',
      payload: { key, newQuantity }
    };
    expect(setQuantity(key, newQuantity)).toEqual(expectedAction);
  });
});
