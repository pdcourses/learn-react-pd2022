import React, { Component } from 'react';
import styles from './User.module.css';

export default class User extends Component {
  
  select = () => {
    this.props.selectHandler();
  }

  render() {
    const {name, surname, age, isSelected, selectHandler} = this.props;
    const selectedStyle = isSelected ? styles.selected : null;
    return (
        <article className={selectedStyle} onClick={this.select}>
            <p>{name} {surname}</p>
        </article>      
    )
  }
}
