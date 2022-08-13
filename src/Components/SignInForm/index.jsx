import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './SignInForm.module.css';
import {PASSWORD_REGEXP} from '../../settings/constants'

//const PASSWORD_REGEXP = /^\S{8,12}.$/;
export default class SignInForm extends Component {
    constructor(props) {
      super(props);    
      this.state = {
        userEmail: '',
        userPassword: '',
        isPasswordValid: false,
      };
    }  
 setEmail = (e) => {
    this.setState({userEmail: e.target.value});
 }
 setPassword = (e) => {
    this.setState({
      userPassword: e.target.value,
      isPasswordValid: PASSWORD_REGEXP.test(e.target.value)
    });
 }
 handleSubmit = (e) => {
    e.preventDefault();
 }
 
 render() {
    const {userEmail, userPassword, isPasswordValid} = this.state;
    const passwordClasses = classNames(styles.input, {
      [styles.passwordValid]: isPasswordValid,
      [styles.passwordInvalid]: !isPasswordValid,
     });
    // console.log('passsword classes = ', passwordClasses);

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="email" value={userEmail} onChange={this.setEmail} placeholder='email'></input>
        <input className={passwordClasses} type="password" value={userPassword} onChange={this.setPassword} placeholder='password'></input>
        <button type="submit">Ok</button>
      </form>
    )
  }
}
