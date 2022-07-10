import React, { Component } from 'react'
export default class HelloClass extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const {name, surname, isHelloMode} = this.props;
    return (
        <>
            <p>
              {isHelloMode ? 'Hello' : 'Bye'}
              , {name} {surname}!</p>
        </>
    )
  }
}

