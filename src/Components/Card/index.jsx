import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    const {name, email, imgSrc} = 
    this.props.user;
    return (
      <div>
        <div>
            <img src={imgSrc} alt='photo'/>
        </div>
        <p>Name: {name}</p>
        <p>Email {email}</p>
      </div>
    )
  }
}
