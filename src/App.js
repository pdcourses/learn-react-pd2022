import React, { Component } from 'react'
import ReactPosts from './Components/ReactPosts'
import CounterFun from './Components/CounterFun'
import Counter from './Components/Counter';

export default class App extends Component {
  render() {
    return <>
    <Counter step={10}/>
    <CounterFun step={10}/>
    </>
  }
}
