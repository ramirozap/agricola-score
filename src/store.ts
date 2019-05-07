import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { colors } from './game/colors/colorsReducers';
import players from './game/players/playersReducer';
import { playersQuantities } from './game/quantities/quantitiesReducer';

const rootReducer = combineReducers({
  entities: combineReducers({
    players: players,
    colors: colors,
    quantities: playersQuantities
  })
} as any);
//todo investigate bug in redux
const store = createStore(rootReducer, composeWithDevTools());

export default store;
