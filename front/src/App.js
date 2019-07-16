import React from 'react';
import { Switch, Route } from 'react-router-dom';


import NavBar from './components/NavBar';
import Home from './components/Home';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
