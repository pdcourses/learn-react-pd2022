import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styles from './Post.module.css';


// props : data={}
export default class Post extends Component {
  render() {
    return (
      <div className={styles.post_conteiner}>
        <h2>{this.props.data.head}</h2>
        <p>{this.props.data.content}</p>
      </div>
    )
  }
}

Post.propTypes = {
    data: PropTypes.shape({
        head: PropTypes.string,
        content: PropTypes.string,
    })
}
Post.defaultProps = {
    data: {
        head: 'default',
        content: 'default'
    }
}

