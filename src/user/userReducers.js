const userReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
        {userName: action.userName}
      ]
      break;
    default:
      return state
  }
}

export default userReducer
