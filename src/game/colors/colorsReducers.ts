import { GameAction, Color } from '../gameTypes';

const defaultColors: Color[] = ['blue', 'green', 'purple', 'red', 'white'];

export const colors = (state = defaultColors, action: GameAction) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return state.filter((color) => color !== action.payload.color);
    case 'REMOVE_PLAYER':
      return [...state, action.payload.color].sort();
    default:
      return state;
  }
};
