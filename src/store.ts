import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { players, colors } from './game/gameReducers';

const rootReducer = combineReducers({
  players: players,
  colors: colors
} as any);
//todo investigate bug in redux
const store = createStore(rootReducer, composeWithDevTools());

export default store;
