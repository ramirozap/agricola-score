import {
  GameAction,
  Player,
  Quantities,
  AddPlayerAction,
  Color
} from './gameTypes';
import { DeepReadonly } from 'deep-freeze';

const defaultQuantities: DeepReadonly<Quantities> = {
  beggarCards: 0,
  boars: 0,
  bonusPoints: 0,
  cardPoints: 0,
  cattles: 0,
  clayRooms: 0,
  familyMembers: 2,
  fencedStables: 0,
  fields: 0,
  grains: 0,
  sheeps: 0,
  pastures: 0,
  stoneRooms: 0,
  unusedSpaces: 0,
  vegetables: 0
};

const quantities = (state = defaultQuantities, action: AddPlayerAction) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return state;
    default:
      return state;
  }
};

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
