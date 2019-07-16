import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Nav>
          <NavItem>
            <NavLink href="/">Wild Circus 2.0</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/AlbumList">Tous les Artistes</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Tous les événements</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Contactez-nous</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Espace Administration</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}