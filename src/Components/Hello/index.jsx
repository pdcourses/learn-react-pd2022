import React from 'react';
import styles from "./Hello.module.css";
//import "./Hello.css"
export default function Hello(props) {
  const {name, surname} = props;
  //<p className={styles.wrapper_hello_react}>Hello, {name} {surname}!</p>
  return (
    <>
        <p className={styles.wrapper_hello_react}>Hello, {name} {surname}!</p>
        <p className="wrapper_hello_react">Hello, {name} {surname}!</p>
    </>
  )
}


