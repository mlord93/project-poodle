import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import '../styles/Sidebar.css';

function Sidebar({ }) {
  return (
    <ul className="sidebarContainer">
      <li className="sidebarContainer__link">
        <Link to="/">
          <div className="sidebarContainer__link__text">Home</div>
        </Link>
      </li>
      <li className="sidebarContainer__link">
        <Link to="/poodles">
          <div className="sidebarContainer__link__text">Poodles</div>
        </Link>
      </li>
    </ul>
  );
}

Sidebar.proptypes = {};

export default Sidebar;