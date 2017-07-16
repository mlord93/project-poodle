import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

import '../styles/About.css';

class About extends Component {
  render() {
    return (
      <div className="aboutComponent">
        <Col md={6} mdOffset={3}>
          <h2>About Us</h2>
          <p>
            This is group was established to help Northwest (OR, WA, ID, UT & MT) Standard Poodles Group to help Standard Poodles in need, transport, foster & adopt, to help prospective new owners to make a wise decision on purchasing a puppy, give support and suggestions on training, feeding, spay/neutering, vaccinations, and general health.
          </p>
        </Col>
      </div>
    );
  }
}

export default About;