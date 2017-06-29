const gameReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return [
        ...state,
        action.player
      ]
      break;
    case 'DELETE_PLAYER':
      let userPosition = state.findIndex( user => user.name === action.userName)
      return [
        ...state.slice(0, action.playerPosition),
        ...state.slice(action.playerPosition + 1)
      ]
      break;
    default:
      return state
  }
}

export default gameReducer
