import React, { Component } from 'react';
export default class InnerCounter extends Component {
    MakeZeroHandler = () => {
        this.props.NewValueHandler(0);
    }    
    render() {
    return (
      <>
        <p>  Inner Counter {this.props.value}</p>
        <button onClick={this.MakeZeroHandler}>make zero</button>
      </>
    )
  }
}
