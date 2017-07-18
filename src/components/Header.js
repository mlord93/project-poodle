import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { Row, Col } from 'react-bootstrap';

import '../styles/Header.css';

class Header extends Component {
	render() {
    const { updateSidebar } = this.props;
		return (
			<Row className="headerComponent">
				<Col xs={12}>
					<div className="headerComponent__container">
						<div className="headerComponent__container__title">Northwest Standard Poodle Network</div>
						<div
              className="headerComponent__container__menuBurger"
              onClick={() => {updateSidebar(true)}}
            >
              &#9776;
            </div>
					</div>
				</Col>
			</Row>
		);
	}
}

Header.proptypes = {
  updateSidebar: PropTypes.func
};

export default Header;