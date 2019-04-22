import { GameAction, Player, Color } from './gameTypes';
import { quantities } from './quantities/quantitiesReducer';

const defaultPlayers: ReadonlyArray<Player> = [];

export const players = (state = defaultPlayers, action: GameAction) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      const player: Player = {
        name: action.payload.playerName,
        color: action.payload.color,
        quantities: quantities(undefined, action)
      };
      return [...state, player];
    case 'REMOVE_PLAYER':
      return [
        ...state.slice(0, action.payload.playerPosition),
        ...state.slice(action.payload.playerPosition! + 1)
      ];
    default:
      return state;
  }
};

const defaultColors: ReadonlyArray<Color> = [
  'blue',
  'red',
  'purple',
  'green',
  'white'
];

export const colors = (state = defaultColors, action: GameAction) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return [...state.filter(color => color !== action.payload.color)];
    case 'REMOVE_PLAYER':
      return [...state, action.payload.color];
    default:
      return state;
  }
};
