import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

import './NavBar.scss';

export default class NavBar extends React.Component {
  render() {
    return (
      <div className="NavBar">
        <Nav>
          <NavItem>
            <NavLink href="/" style={{color: 'black'}}>Wild Circus 2.0</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/ArtistList" style={{color: 'black'}}>All artists</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/EventList" style={{color: 'black'}}>All events</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/Contact" style={{color: 'black'}}>Contact us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" style={{color: 'black'}}>Admin</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}