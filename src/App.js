import Counter from './Components/Counter';
import React, { Component } from 'react';
import { StepContext } from './Contexts';

export default class App extends Component {
  constructor(props) {
    super(props);  
    this.state = {
       step: 1,
    }
  }
  handleStep = e => {
    this.setState({step: Number(e.target.value)})
  }
  render() {
    const {step} = this.state;
    return (
      <StepContext.Provider value={step}>
          <Counter />
      </StepContext.Provider>
      /*
      <div>
        <input type="number" value={step} onChange={this.handleStep} />
        <Counter step={step} />
      </div>
      */
    )
  }
}