import {
  quantity,
  defaultQuantities,
  playersQuantities
} from './quantitiesReducer';
import {
  IncrementQuantityAction,
  Quantities,
  DecrementQuantityAction,
  SetQuantityAction,
  PlayersQuantities
} from './quantitiesTypes';
import { DeepReadonly } from 'deep-freeze';
import { AddPlayerAction, RemovePlayerAction } from '../gameTypes';
import { sheeps } from './quantitiesSelectors';

describe('Quantity Reducer', () => {
  let initialState: DeepReadonly<PlayersQuantities>;
  let payload: { [key: string]: string };
  beforeEach(() => {
    initialState = {
      ramiro: {
        ...defaultQuantities
      }
    };
    payload = { key: 'cattles', playerName: 'ramiro' };
  });

  it('add player', () => {
    const addPlayer: AddPlayerAction = {
      type: 'ADD_PLAYER',
      payload: { playerName: 'ramiro', color: 'blue' }
    };
    const expectedState: PlayersQuantities = {
      ramiro: { ...defaultQuantities }
    };
    expect(playersQuantities(undefined, addPlayer)).toEqual(expectedState);
  });

  it('add player', () => {
    const addPlayer: RemovePlayerAction = {
      type: 'REMOVE_PLAYER',
      payload: { playerName: 'ramiro', color: 'blue' }
    };
    const expectedState: PlayersQuantities = {};
    expect(playersQuantities(initialState, addPlayer)).toEqual(expectedState);
  });

  it('increment', () => {
    const increment: IncrementQuantityAction = {
      type: 'INCREMENT_QUANTITY',
      payload: { key: 'cattles', playerName: 'ramiro' }
    };
    const expectedState = {
      ...initialState,
      ramiro: {
        ...defaultQuantities,
        cattles: defaultQuantities.cattles + 1
      }
    };
    expect(playersQuantities(initialState, increment)).toEqual(expectedState);
  });
  it('decrement', () => {
    const increment: DecrementQuantityAction = {
      type: 'DECREMENT_QUANTITY',
      payload: { key: 'cattles', playerName: 'ramiro' }
    };
    const expectedState = {
      ...initialState,
      ramiro: {
        ...defaultQuantities,
        cattles: defaultQuantities.cattles - 1
      }
    };
    expect(playersQuantities(initialState, increment)).toEqual(expectedState);
  });

  it('set quantity', () => {
    const newQuantity = 3;
    const increment: SetQuantityAction = {
      type: 'SET_QUANTITY',
      payload: { key: 'cattles', newQuantity, playerName: 'ramiro' }
    };
    const expectedState = {
      ...initialState,
      ramiro: {
        ...defaultQuantities,
        cattles: 3
      }
    };
    expect(playersQuantities(initialState, increment)).toEqual(expectedState);
  });
});
