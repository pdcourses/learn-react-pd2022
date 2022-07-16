import React, { Component } from 'react'
import Car from './Car';

const db=[
    {id: 1, model: 'Model X', year: 2020, color: 'red'},
    {id: 1, model: 'Model XR', year: 2022, color: 'black'},
    {id: 1, model: 'Model W', year: 2021, color: 'blue'},
    {id: 1, model: 'Model P', year: 2020, color: 'black'},
];

export default class UserList extends Component {
  constructor(props){
    super(props);
    this.state = {
        cars: db,
    }
  }
  makeList = (c, index) => {
    return <Car key={index} car={c}/>;
  }
  render() {
    const {cars} = this.state;
    return (
        <ul>{cars.map(this.makeList)}</ul>
    );
  }
}
