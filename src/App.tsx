import * as React from 'react';
import { Route } from 'react-router';
import PlayerInput from './game/PlayerInput';

const App = () => <Route path="/" component={PlayerInput} />;

export default App;
