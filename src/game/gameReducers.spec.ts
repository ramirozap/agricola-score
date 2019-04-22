import { players, colors } from './gameReducers';
import deepFreeze from 'deep-freeze';

import {
  Player,
  AddPlayerAction,
  Quantities,
  RemovePlayerAction,
  Color
} from './gameTypes';

const defaultQuantities: Quantities = {
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

describe('Player Reducer', () => {
  it('ADD_PLAYER action', () => {
    const addPlayerAction: AddPlayerAction = {
      type: 'ADD_PLAYER',
      payload: {
        playerName: 'ramiro',
        color: 'blue'
      }
    };
    expect(players(undefined, addPlayerAction)).toEqual([
      {
        name: 'ramiro',
        color: 'blue',
        quantities: defaultQuantities
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
