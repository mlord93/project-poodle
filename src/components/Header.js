import React, { Component } from 'react';
import { Row, Col, DropdownButton, MenuItem } from 'react-bootstrap';

import '../styles/Header.css';

class Header extends Component {
  render() {
  	const dropdownBurger = (
  		<DropdownButton bsSize="large" pullRight bsStyle="default" title="&#9776;" noCaret id="menu-dropdown-burger">
	      <MenuItem eventKey="1">About Us</MenuItem>
	      <MenuItem eventKey="2">Poodlers</MenuItem>
	    </DropdownButton>
  	);

    return (
      <Row className="headerComponent">
      	<Col xs={12}>
      		<div className="headerComponent__container">
	        	<div className="headerComponent__container__title">Northwest Standard Poodle Network</div>
      			<div className="headerComponent__container__menuBurger">{dropdownBurger}</div>
	        </div>
        </Col>
      </Row>
    );
  }
}

export default Header;