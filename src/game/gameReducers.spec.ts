import gameReducer from './gameReducers';
import deepFreeze from 'deep-freeze';

import { Player } from './gameTypes';

const defaultState: Player[] = [];
deepFreeze(defaultState);

describe('Test User Reducers', () => {
  describe('Test ADD_PLAYER action', () => {
    it('should create a game', () => {
      expect(
        gameReducer(defaultState, {
          type: 'ADD_PLAYER',
          payload: {
            playerName: 'ramiro',
            color: 'blue'
          }
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
