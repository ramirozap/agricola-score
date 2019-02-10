import { combineReducers, createStore } from "redux";

import gameReducers from "./game/gameReducers";

const rootReducer = combineReducers({
  players: gameReducers
});
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
