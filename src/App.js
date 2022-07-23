import React, { Component } from 'react'
import ClockFun from './Components/ClockFun';

export default class App extends Component {
  render() {
    return <>
    <ClockFun step={1} />
    <ClockFun step={-1} />
    <ClockFun step={100} />
    </>
  }
}
