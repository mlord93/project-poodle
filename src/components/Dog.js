import React from 'react';
import { PropTypes } from 'prop-types';
import { Media, Well, Col} from 'react-bootstrap';
import '../styles/Dog.css';

function Dog( { name, images = [], age, location, notes } ) {
  const { Left, Body, Heading } = Media;

  const infoElement = (name, value) => {
    return(
      <div><span className="dogComponent__container__dogInfoTitle">{name}: </span>{value}</div>
    );
  };

  return (
    <Well className="dogComponent__container__dogInfoWell">
      <Media>
        <Left align="middle">
          <Col md={2}>
            <img alt={name} width={200} href="#" src={`${process.env.PUBLIC_URL}${images[0]}`}  />
          </Col>
        </Left>
        <Body>
          <Heading>
            {name}
          </Heading>
            {infoElement("Age", age)}
            {infoElement("Location", location)}
            {infoElement("Notes", notes)}
        </Body>
      </Media>
    </Well>
  );
}

Dog.proptypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  images: PropTypes.array,
  age: PropTypes.string,
  location: PropTypes.string,
  notes: PropTypes.string
};

export default Dog;