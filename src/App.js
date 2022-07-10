import { Component, Fragment } from 'react';
import './App.css';
import Water from './Components/Water';


export default class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <>
        <Water temperature={-10}/>
        <Water temperature={22}/>
        <Water temperature={100}/>
      </>
    )
  }
}

