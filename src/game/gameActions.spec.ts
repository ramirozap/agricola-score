import { addPlayer, removePlayer } from './gameActions';

describe('Test Game Actions', () => {
  it('should create an action to add a player to the current game', () => {
    const playerName = 'ramirozap';
    const color = 'blue';
    const expectedAction = {
      type: 'ADD_PLAYER',
      payload: { playerName, color }
    };
    expect(addPlayer(playerName, color)).toEqual(expectedAction);
  });
  it('should create an action to remove a player', () => {
    const playerPosition = 0;
    const color = 'blue';
    const expectedAction = {
      type: 'REMOVE_PLAYER',
      payload: { playerPosition, color }
    };
    expect(removePlayer(playerPosition, color)).toEqual(expectedAction);
  });
});
