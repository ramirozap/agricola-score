import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as gameActions from './game/gameActions'
import PlayerInput from './game/PlayerInput'

function mapStateToProps(state){
  return {
    players: state.players
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(gameActions, dispatch)
}

const App = connect(mapStateToProps, mapDispatchToProps)(PlayerInput)

export default App
