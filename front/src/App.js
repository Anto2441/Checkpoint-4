import React from 'react';
import { Switch, Route } from 'react-router-dom';


import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import ArtistList from './components/ArtistList';
import EventList from './components/EventList';
import Contact from './components/Contact';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/ArtistList' component={ArtistList} />
        <Route path='/EventList' component={EventList} />
        <Route path='/Contact' component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
