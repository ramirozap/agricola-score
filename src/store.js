import { combineReducers, createStore } from 'redux'

import gameReducers from './game/gameReducers'

const rootReducer = combineReducers({
  players: gameReducers,
})
const store = createStore(rootReducer)

export default store
