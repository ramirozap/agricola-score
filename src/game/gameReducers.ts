import { GameAction, Player } from './gameTypes';

const defaultState: Player[] = [];

const gameReducer = (state = defaultState, action: GameAction) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return [
        ...state,
        {
          name: action.payload.playerName,
          color: action.payload.color
        }
      ];
    case 'REMOVE_PLAYER':
      return [
        ...state.slice(0, action.payload.playerPosition),
        ...state.slice(action.payload.playerPosition! + 1)
      ];
    default:
      return state;
  }
};

export default gameReducer;
