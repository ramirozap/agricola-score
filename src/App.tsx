import * as React from 'react';
import { Route } from 'react-router';
import PlayerInput from './game/PlayerInput';
import PoinSection from './game/PointSection';
import './App.css';

const App = () => {
  return (
    <React.Fragment>
      <Route path="/" exact component={PlayerInput} />
      <Route path="/points/:pointType" exact component={PoinSection} />
    </React.Fragment>
  );
};

export default App;
