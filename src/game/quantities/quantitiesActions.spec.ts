import { increment, decrement, setQuantity } from './quantitiesActions';
import {
  IncrementQuantityAction,
  DecrementQuantityAction,
  SetQuantityAction,
  QuantitiesKeys
} from './quantitiesTypes';

describe('Quantities Actions', () => {
  let key: QuantitiesKeys;
  let playerName: string;
  beforeEach(() => {
    key = 'cattles';
    playerName = 'ramiro';
  });
  it('action to increment a specific quantity', () => {
    const expectedAction: IncrementQuantityAction = {
      type: 'INCREMENT_QUANTITY',
      payload: { key, playerName }
    };
    expect(increment(key, playerName)).toEqual(expectedAction);
  });
  it('action to decrement a specific quantity', () => {
    const expectedAction: DecrementQuantityAction = {
      type: 'DECREMENT_QUANTITY',
      payload: { key, playerName }
    };
    expect(decrement(key, playerName)).toEqual(expectedAction);
  });
  it('action to set a specific quantity', () => {
    const newQuantity = 10;
    const expectedAction: SetQuantityAction = {
      type: 'SET_QUANTITY',
      payload: { key, newQuantity, playerName }
    };
    expect(setQuantity(key, newQuantity, playerName)).toEqual(expectedAction);
  });
});
