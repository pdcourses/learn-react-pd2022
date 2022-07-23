import React, { Component } from 'react'

export default class SignInForm extends Component {
    constructor(props) {
      super(props);    
      this.state = {
        userEmail: '',
        userPassword: '',
      };
    }
  
 setEmail = (e) => {
    this.setState({userEmail: e.target.value});
 }

 setPassword = (e) => {
    this.setState({userPassword: e.target.value});
 }
 handleSubmit = (e) => {
    e.preventDefault();
 }

  render() {
    const {userEmail, userPassword} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="email" value={userEmail} onChange={this.setEmail} placeholder='email'></input>
        <input type="password" value={userPassword} onChange={this.setPassword} placeholder='password'></input>
        <button type="submit">Ok</button>
      </form>
    )
  }
}
