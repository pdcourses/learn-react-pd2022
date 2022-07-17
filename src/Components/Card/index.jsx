import React, { Component } from 'react'
import styles from './Card.module.css';
import stc from 'string-to-color';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class Card extends Component {
  render() {
    const {user: {name, surname, isSelected}, select} = this.props;
    const selectedStyle = isSelected ? styles.selected : null;
    //const color = stc(name.concat(surname))
    const initials = name[0].toUpperCase() + surname[0].toUpperCase();
    const color = stc(initials);
    const styleDiv = {
      backgroundColor: color
    }
    return (
      <li onClick={select} className={selectedStyle}>
        {/*<div className={styles.colorDiv+" "+styles.flexCenter} style={styleDiv}>*/}
        <div className={classNames(styles.colorDiv,styles.flexCenter)} style={styleDiv}>
            {initials}
        </div>
        <p>{name} {surname}</p>
      </li>
    )
  }
}

Card.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
    isSelected: PropTypes.bool.isRequired,
  }),
  select: PropTypes.func,
}

Card.defaultProps = {
  user: {
    name: 'unknown',
    surname: 'unknown',
    isSelected: false,
  }
}

// <Card user={name: 'n', surname:'s', isSelected: true} />

