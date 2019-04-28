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
      return state.filter(player => player.color !== action.payload.color);
    case 'INCREMENT_QUANTITY':
    case 'DECREMENT_QUANTITY':
    case 'SET_QUANTITY':
      return state.map(player =>
        player.color === action.payload.color
          ? { ...player, quantities: quantities(player.quantities, action) }
          : player
      );
    default:
      return state;
  }
};

const defaultColors: ReadonlyArray<Color> = [
  'blue',
  'green',
  'purple',
  'red',
  'white'
];

export const colors = (state = defaultColors, action: GameAction) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return state.filter(color => color !== action.payload.color);
    case 'REMOVE_PLAYER':
      return [...state, action.payload.color].sort();
    default:
      return state;
  }
};
