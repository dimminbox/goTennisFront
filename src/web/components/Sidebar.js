/* global window */
import React from 'react';
import { Col, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const SidebarNavItems = () => (
  <div>
    <NavItem>
      <Link className={`nav-link ${window.location.pathname === '/' && 'active'}`} to="/">
        <i className="icon-home" />
        {' '}
        <span>
          Home
        </span>
      </Link>
    </NavItem>
    <NavItem>
      <Link className={`nav-link ${window.location.pathname.startsWith('/') && 'active'}`} to="/matches">
        <i className="icon-game-controller" />
        {' '}
        <span>
          Matches
        </span>
      </Link>
    </NavItem>
    <NavItem>
      <Link className={`nav-link ${window.location.pathname.startsWith('/') && 'active'}`} to="/rating">
        <i className="icon-playlist" />
        {' '}
        <span>
          Ratings
        </span>
      </Link>
    </NavItem>
  </div>
);

const Sidebar = () => (
  <div>
    <Col sm="3" md="2" className="d-none d-sm-block sidebar">
      <Nav vertical>
        {SidebarNavItems()}
      </Nav>
    </Col>
  </div>
);

export { Sidebar, SidebarNavItems };
