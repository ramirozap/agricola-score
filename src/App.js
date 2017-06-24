import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as userActions from './user/userActions'
import UserInput from './user/UserInput'

function mapStateToProps(state){
  return {
    users: state.users
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(userActions, dispatch)
}

const App = connect(mapStateToProps, mapDispatchToProps)(UserInput)

export default App
