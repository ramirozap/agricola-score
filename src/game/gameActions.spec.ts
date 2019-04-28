import { addPlayer, removePlayer } from './gameActions';

describe('Test Game Actions', () => {
  it('action to add a player to the current game', () => {
    const playerName = 'ramirozap';
    const color = 'blue';
    const expectedAction = {
      type: 'ADD_PLAYER',
      payload: { playerName, color }
    };
    expect(addPlayer(playerName, color)).toEqual(expectedAction);
  });
  it('action to remove a player', () => {
    const color = 'blue';
    const expectedAction = {
      type: 'REMOVE_PLAYER',
      payload: { color }
    };
    expect(removePlayer(color)).toEqual(expectedAction);
  });
});
