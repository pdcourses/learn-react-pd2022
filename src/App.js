import { Component, Fragment } from 'react';
import './App.css';
import User from './Components/User';


export default class App extends Component{
  /*
  constructor(props){
    super(props);
    this.state = {
      currentUser: {
        name: "Joth Smith",
        email: "john@gmail.com",
        imgSrc: '#',
      },
    }
  }*/
  render(){
    return(
      <>
        <User />
      </>
    )
  }
}

