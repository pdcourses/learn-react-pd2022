import React, { Component } from 'react';
import {format, add, addDays, sub} from 'date-fns';

export default class Calendar extends Component {
  constructor(props){
    super(props);
    this.state = {
        day: new Date()
    }
  }
  addDays1 = options => {
    const newDay = add(this.state.day, options);
    this.setState({day: newDay});
  }
  addDays2 = options => {
    const newDay = addDays(this.state.day, options);
    this.setState({day: newDay});
  }
  subDays1 = options => {
    const newDay = sub(this.state.day, options);
    this.setState({day: newDay});
  }

  render() {
    const {day} = this.state;
    return (
      <>
        <p>{format(day, 'do MMM yy')}</p>
        <button onClick={() => this.addDays1({days: 1})}>Add 1 day</button>
        <button onClick={() => this.addDays1({days: 10})}>Add 10 day</button>
        <button onClick={() => this.addDays2(1)}>Add 1 day</button>
        <button onClick={() => this.subDays1({days: 1})}>Sub 1 day</button>
      </>
    )
  }
}
