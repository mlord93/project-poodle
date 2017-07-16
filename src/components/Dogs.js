import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

import Dog from './Dog';
import DogList from './../available.json';

import '../styles/Dogs.css';

class Dogs extends Component {
  constructor() {
    super();

    this.state = {
      title: "Available Dogs",
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
        <Dog dog={dog} key={dog.id} />
      )
    );
  }

  render() {
    return (
      <div className="dogsComponent">
        <h2 className="dogsComponent__container__dogsTitle">{this.state.title}</h2>
        <Col xs={10} xsOffset={1}>
          {this._renderDogList()}
        </Col>
      </div>
    );
  }
}

export default Dogs;