import { GameAction, Player } from './gameTypes';

const defaultState: Player[] = [];

const gameReducer = (state = defaultState, action: GameAction) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return [
        ...state,
        {
          name: action.playerName,
          color: action.color
        }
      ];
    case 'DELETE_PLAYER':
      return [
        ...state.slice(0, action.playerPosition),
        ...state.slice(action.playerPosition! + 1)
      ];
    default:
      return state;
  }
};

export default gameReducer;
