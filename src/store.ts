import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import gameReducers from './game/gameReducers';

const rootReducer = combineReducers({
  players: gameReducers
});
const store = createStore(rootReducer, composeWithDevTools());

export default store;
