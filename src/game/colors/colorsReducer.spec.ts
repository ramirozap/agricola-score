import { colors } from './colorsReducers';
import deepFreeze from 'deep-freeze';
import { AddPlayerAction, RemovePlayerAction, Color } from '../gameTypes';
describe('Colors reducer', () => {
  let defaultColors: ReadonlyArray<Color>;
  beforeEach(() => {
    defaultColors = ['blue', 'green', 'purple', 'red', 'white'];
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
        playerName: 'ramiro',
        color: 'blue'
      }
    };
    //remove 'blue' as if a player picked it before
    const currentState: ReadonlyArray<Color> = [...defaultColors.slice(1)];
    deepFreeze(currentState);
    expect(colors(currentState, action)).toEqual(
      [...currentState, 'blue'].sort()
    );
  });
});
