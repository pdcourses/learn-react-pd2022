import React, { Component } from 'react'
import DisplayValue from './Components/DisplayValue';

export default class App extends Component {
  constructor(props) {
    super(props);  
    this.state = {
       x: 0,
    }
    console.group('Parent constructor');
    console.log('state=',this.state.x);
    console.groupEnd();
  }
  componentDidMount(){
    console.group('Parent componentDidMount');
    console.log('state=',this.state.x);
    console.groupEnd();
  }
  componentDidUpdate(prevProps, prevState){
    console.group('Parent  componentDidUpdate');
    console.log('state=',this.state.x);
    console.groupEnd();
  }
  componentWillUnmount(){
    console.log('method componentWillUnmount', this.state.x);
  }
  inc = () => {
    this.setState({x : this.state.x + 1});
    console.group('Parent INC function');
    console.log('state=',this.state.x);
    console.groupEnd();
  }
  render() {
    console.group('Parent  render');
    console.log('state=',this.state.x);
    console.groupEnd();
    return (
      <div>
        <h1>State X = {this.state.x}</h1>
        <button onClick={this.inc}>+</button>
        <DisplayValue x={this.state.x} />
      </div>
    )
  }
}




