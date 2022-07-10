import { Component, Fragment } from 'react';
import './App.css';
import Hello from './Components/Hello';
import HelloClass from './Components/HelloClass';

const user = {
  userName: 'Tom',
  userSurname: 'Fox',
  email: 'tom@gmail.com'
};

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      userName: 'unknown',
      userSurname: 'unknown'
    };
  }
  loadUser = () => {
    this.setState({
      userName: user.userName,
      userSurname: user.userSurname
    });
  }
  render(){
    return(
      <>
        <button onClick={this.loadUser}>load</button>
        <HelloClass name={this.state.userName} surname={this.state.userSurname} />
      </>
    )
  }
}

