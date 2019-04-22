import { quantities, defaultQuantities } from './quantitiesReducer';
import {
  IncrementQuantityAction,
  Quantities,
  DecrementQuantityAction,
  SetQuantityAction
} from './quantitiesTypes';
import { DeepReadonly } from 'deep-freeze';

describe('Quantity Reducer', () => {
  let defaultState: DeepReadonly<Quantities>;
  beforeEach(() => {
    defaultState = defaultQuantities;
  });
  it('increment', () => {
    const increment: IncrementQuantityAction = {
      type: 'INCREMENT_QUANTITY',
      payload: { key: 'cattles' }
    };
    const expectedState = {
      ...defaultState,
      cattles: defaultState.cattles + 1
    };
    expect(quantities(defaultState, increment)).toEqual(expectedState);
  });
  it('decrement', () => {
    const increment: DecrementQuantityAction = {
      type: 'DECREMENT_QUANTITY',
      payload: { key: 'cattles' }
    };
    const expectedState = {
      ...defaultState,
      cattles: defaultState.cattles - 1
    };
    expect(quantities(defaultState, increment)).toEqual(expectedState);
  });

  it('set quantity', () => {
    const newQuantity = 3;
    const increment: SetQuantityAction = {
      type: 'SET_QUANTITY',
      payload: { key: 'cattles', newQuantity }
    };
    const expectedState = {
      ...defaultState,
      cattles: newQuantity
    };
    expect(quantities(defaultState, increment)).toEqual(expectedState);
  });
});
