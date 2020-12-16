import * as React from 'react';
import { Route } from 'react-router';
import PlayerInput from './game/PlayerInput';
import PointSection from './game/points/PointSection';
import Result from './game/points/Result';
import './App.css';
//asad asdasdasd
const App = () => {
  return (
    <React.Fragment>
      <Route path="/" exact component={PlayerInput} />
      <Route path="/points/:pointType" exact component={PointSection} />
      <Route path="/result" exact component={Result} />
    </React.Fragment>
  );
};

export default App;
