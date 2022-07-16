import { Component, Fragment } from 'react';
import './App.css';
import Counter from './Components/Counter';
export default class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <>
        <Counter step={2}/>
        <Counter step={5}/>
        <Counter step={10}/>
      </>
    )
  }
}

