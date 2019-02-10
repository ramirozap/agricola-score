import gameReducer from './gameReducers';
import deepFreeze from 'deep-freeze';

import { Player } from './gameTypes';

describe('Test User Reducers', () => {
  it('should return the default state', () => {
    expect(gameReducer(undefined, { type: 'INVALID_ACTION' })).toEqual([]);
  });
  describe('Test ADD_PLAYER action', () => {
    it('should create a game', () => {
      let initialState: Player[] = [];
      deepFreeze(initialState);
      expect(
        gameReducer(initialState, {
          type: 'ADD_PLAYER',
          playerName: 'ramiro',
          color: 'blue'
        })
      ).toEqual([
        {
          name: 'ramiro',
          color: 'blue'
        }
      ]);
    });
  });
});
