import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="aboutComponent">
      	<img src={process.env.PUBLIC_URL + '/images/Logo.jpg'} />;
      </div>
    );
  }
}

export default About;