import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import '../styles/Sidebar.css';

function Sidebar({ }) {
  return (
    <ul className="sidebarContainer">
      <li className="sidebarContainer__link">
        <Link to="/">
          <div className="sidebarContainer__link__text"><FontAwesome name='home' /> Home</div>
        </Link>
      </li>
      <li className="sidebarContainer__link">
        <Link to="/poodles">
          <div className="sidebarContainer__link__text"><FontAwesome name='paw' /> Poodles</div>
        </Link>
      </li>
    </ul>
  );
}

Sidebar.proptypes = {};

export default Sidebar;