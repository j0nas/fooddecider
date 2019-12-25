import React from 'react';
import { Navbar as Nav, Alignment } from '@blueprintjs/core';
import Profile from '../Profile';

const NavBar = () => (
  <Nav>
    <Nav.Group>
      <Nav.Heading>Fooddecider</Nav.Heading>
    </Nav.Group>
    <Nav.Group align={Alignment.RIGHT}>
      <Profile />
    </Nav.Group>
  </Nav>
);

export default NavBar;
