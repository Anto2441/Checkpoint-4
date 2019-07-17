import React from 'react';
import { Switch, Route } from 'react-router-dom';


import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import ArtistList from './components/ArtistList';
import EventList from './components/EventList';
import Contact from './components/Contact';
import AdminHome from './admin/AdminHome';
import AdminPostArtist from './admin/AdminPostArtist';
import AdminPostEvent from './admin/AdminPostEvent';
import AdminUpdateArtist from './admin/AdminUpdateArtist';

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
        <Route path='/Admin' component={AdminHome} />
        <Route path='/AdminPostArtist' component={AdminPostArtist}/>
        <Route path='/AdminPostEvent' component={AdminPostEvent}/>
        <Route path='/AdminUpdateArtist/:id' component={AdminUpdateArtist}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
