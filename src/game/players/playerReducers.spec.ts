import { playersById, allPlayers } from './playersReducer';
import deepFreeze from 'deep-freeze';

import { AddPlayerAction, RemovePlayerAction, Players } from '../gameTypes';

describe('playersById Reducer', () => {
  it('ADD_PLAYER action', () => {
    const addPlayerAction: AddPlayerAction = {
      type: 'ADD_PLAYER',
      payload: {
        playerName: 'ramiro',
        color: 'blue'
      }
    };
    expect(playersById(undefined, addPlayerAction)).toMatchObject({
      ramiro: {
        name: 'ramiro',
        color: 'blue'
      }
    });
  });
  it('REMOVE_PLAYER', () => {
    const initialState: Players['playersById'] = {
      ramiro: {
        name: 'ramiro',
        color: 'blue'
      }
    };
    const removePlayerAction: RemovePlayerAction = {
      type: 'REMOVE_PLAYER',
      payload: {
        playerName: 'ramiro',
        color: 'blue'
      }
    };
    const emptyState = {};
    deepFreeze(initialState);
    expect(playersById(initialState, removePlayerAction)).toEqual(emptyState);
  });
});

describe('allPlayers Reducer', () => {
  it('ADD_PLAYER action', () => {
    const addPlayerAction: AddPlayerAction = {
      type: 'ADD_PLAYER',
      payload: {
        playerName: 'ramiro',
        color: 'blue'
      }
    };
    expect(allPlayers(undefined, addPlayerAction)).toMatchObject(['ramiro']);
  });
  it('REMOVE_PLAYER', () => {
    const initialState: string[] = ['ramiro'];
    const removePlayerAction: RemovePlayerAction = {
      type: 'REMOVE_PLAYER',
      payload: {
        playerName: 'ramiro',
        color: 'blue'
      }
    };
    const emptyState: string[] = [];
    deepFreeze(initialState);
    expect(allPlayers(initialState, removePlayerAction)).toEqual(emptyState);
  });
});
