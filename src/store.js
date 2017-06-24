import { combineReducers, createStore } from 'redux'

import userReducer from './user/userReducers'

const rootReducer = combineReducers({
  users: userReducer,
})
const store = createStore(rootReducer)

export default store
