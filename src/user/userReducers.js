const userReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
        {name: action.userName}
      ]
      break;
    case 'DELETE_USER':
      let userPosition = state.findIndex( user => user.name === action.userName)
      return [
        ...state.slice(0, userPosition),
        ...state.slice(userPosition + 1)
      ]
      break;
    default:
      return state
  }
}

export default userReducer
