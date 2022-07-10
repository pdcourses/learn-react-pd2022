import { Component, Fragment } from 'react';
import './App.css';

/*
function App(){
  return(
    <p>Hello React!!!</p>
  );
}
*/

let count = 100;

class App extends Component{
  render(){
    return(
      <>
        <p>Hello React!!! {10+20} 1+1</p>
        <p>text</p>
        <p id={1}>item 1</p>
        <p id={10-2}>item 1</p>
        <p id={++count}>text</p>
        <p id={++count}>text</p>
        <p id={++count}>text</p>
        <p id={++count}>text</p>
      </>
    )
  }
}


export default App;