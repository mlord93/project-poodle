import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import {Media} from 'react-bootstrap';
import DogList from './../available.json';
import '../styles/Available.css';

function DogPost(props) {
  return (
    <Media>
      <Media.Left align="middle">
        <img alt={props.dog.name} src={process.env.PUBLIC_URL + props.dog.images[0]} width={200} />
      </Media.Left>
      <Media.Body>
        <Media.Heading>
          {props.dog.name}
        </Media.Heading>
        <div><span className="dog-info-title">Age: </span>{props.dog.age}</div>
        <div><span className="dog-info-title">Location: </span>{props.dog.location}</div>
        <div><span className="dog-info-title">Notes: </span>{props.dog.notes}</div>
      </Media.Body>
    </Media>
  )
}

class Available extends Component {
  constructor() {
    super();

    this.state = {
      dogs: []
    };

    this._fetchDogList = this._fetchDogList.bind(this);
    this._renderDogList = this._renderDogList.bind(this);
  }

  componentDidMount() {
    this._fetchDogList();
  }

  _fetchDogList() {
    // fetch list
    this.setState({ dogs: DogList });
  }

  _renderDogList() {
    const { dogs } = this.state;
    return (
      dogs.map((dog) =>
        <DogPost dog={dog}/>
      )
    );
  }

  render() {
    return (
      <div className="availableComponent">
        <Col xs={10} xsOffset={1}>
          {this._renderDogList()}
        </Col>
      </div>
    );
  }
}

export default Available;