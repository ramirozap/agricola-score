import { players, colors } from './gameReducers';
import deepFreeze from 'deep-freeze';

import {
  Player,
  AddPlayerAction,
  RemovePlayerAction,
  Color
} from './gameTypes';

import { defaultQuantities } from './quantities/quantitiesReducer';

describe('Player Reducer', () => {
  it('ADD_PLAYER action', () => {
    const addPlayerAction: AddPlayerAction = {
      type: 'ADD_PLAYER',
      payload: {
        playerName: 'ramiro',
        color: 'blue'
      }
    };
    expect(players(undefined, addPlayerAction)).toMatchObject([
      {
        name: 'ramiro',
        color: 'blue'
      }
    ]);
  });
  it('REMOVE_PLAYER', () => {
    const initialState: Player[] = [
      {
        name: 'ramiro',
        color: 'blue',
        quantities: defaultQuantities
      }
    ];
    const removePlayerAction: RemovePlayerAction = {
      type: 'REMOVE_PLAYER',
      payload: {
        playerPosition: 0,
        color: 'blue'
      }
    };
    const emptyState: Player[] = [];
    deepFreeze(initialState);
    expect(players(initialState, removePlayerAction)).toEqual(emptyState);
  });
});

describe('Colors reducer', () => {
  let defaultColors: ReadonlyArray<Color>;
  beforeEach(() => {
    defaultColors = ['blue', 'red', 'purple', 'green', 'white'];
    deepFreeze(defaultColors);
  });
  it('DEFAULT', () => {
    expect(colors(undefined, { type: 'DEFAULT' })).toEqual(defaultColors);
  });
  it('ADD_PLAYER', () => {
    // removes the color picked by that player
    const action: AddPlayerAction = {
      type: 'ADD_PLAYER',
      payload: {
        playerName: 'ramiro',
        color: 'blue'
      }
    };
    expect(colors(defaultColors, action)).toEqual([
      ...defaultColors.filter(color => color !== 'blue')
    ]);
  });
  it('REMOVE_PLAYER', () => {
    //recovers the color picked by the removed player
    const action: RemovePlayerAction = {
      type: 'REMOVE_PLAYER',
      payload: {
        playerPosition: 0,
        color: 'blue'
      }
    };
    //remove 'blue' as if a player picked it before
    const currentState: ReadonlyArray<Color> = [...defaultColors.slice(1)];
    deepFreeze(currentState);
    expect(colors(currentState, action)).toEqual([...currentState, 'blue']);
  });
});
