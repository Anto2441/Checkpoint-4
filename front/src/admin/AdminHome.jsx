import React from 'react';
import { NavLink } from 'react-router-dom';
import AdminGetArtist from './AdminGetArtist';
import AdminGetEvent from './AdminGetEvent';

import './AdminHome.scss'

const logOut = () => {
  localStorage.clear();
};

function AdminHome() {
  return (
    <div className="AdminHome">
      <h1 className="mainTitle">Admin Space</h1>
        <div className="links">
          <p className="link1" ><NavLink to='/AdminPostArtist'>Add an artist</NavLink></p>
          <p className="link2" ><NavLink to='/AdminPostEvent'>Add an event</NavLink></p>
        </div>
        <NavLink to="/"><button className="logout" type="button" onClick={logOut}> Log out </button></NavLink>
        <hr />
      <AdminGetArtist />
      <AdminGetEvent />
    </div>
  );
}

export default AdminHome;