import React, { Component } from 'react'
import Counter from './Components/Counter';
import User from './Components/User';

export default class App extends Component {
  constructor(props) {
    super(props);  
    this.state = {
       name: 'Tom',
       surname: 'Fox',
       age: 20,
       isSelected: false,
    };
  }
  selectHandler = () => {
    this.setState({isSelected: 
      !this.state.isSelected});
  }
  render() {
    const {name, surname, age, isSelected} 
    = this.state;
    return(
      <>
      <Counter step={1} />
      <User 
        name={name}
        surname={surname}
        age={age}
        isSelected={isSelected}
        selectHandler = {this.selectHandler}
      />
      </>
    );    
}
}
