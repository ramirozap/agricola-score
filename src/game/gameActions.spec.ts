import { addPlayer, removePlayer } from './gameActions';
import { Color } from 'csstype';
import { RemovePlayerAction, AddPlayerAction } from './gameTypes';

describe('Test Game Actions', () => {
  let color: Color;
  let playerName: string;
  beforeEach(() => {
    color = 'blue';
    playerName = 'ramiro';
  });
  it('action to add a player to the current game', () => {
    const expectedAction: AddPlayerAction = {
      type: 'ADD_PLAYER',
      payload: { playerName, color }
    };
    expect(addPlayer(playerName, color)).toEqual(expectedAction);
  });
  it('action to remove a player', () => {
    const expectedAction: RemovePlayerAction = {
      type: 'REMOVE_PLAYER',
      payload: { playerName, color }
    };
    expect(removePlayer(playerName, color)).toEqual(expectedAction);
  });
});
