import React, { Component } from 'react'

export default class Car extends Component {
  render() {
    const {car: {model, year, color}} = this.props;
    return (
      <li>
        <p>Model {model} {color}: {year}</p>
      </li>
    );
  }
}
