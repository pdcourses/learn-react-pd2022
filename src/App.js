import { Component, Fragment } from 'react';
import './App.css';
import HelloClass from './Components/HelloClass';

export default class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <>
        <HelloClass name={"Vasya"} surname={"Ivanov"} isHelloMode={true} />
        <HelloClass name={"Tom"} surname={"Fox"} isHelloMode={false} />
      </>
    )
  }
}

