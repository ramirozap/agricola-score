import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Route } from "react-router";

import * as gameActions from "./game/gameActions";
import PlayerInput from "./game/PlayerInput";

function mapStateToProps(state) {
  return {
    players: state.players
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(gameActions, dispatch);
}

const PlayerComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerInput);

const App = () => <Route path="/" component={PlayerComponent} />;

export default App;
