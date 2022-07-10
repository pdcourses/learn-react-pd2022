import { Component, Fragment } from 'react';
import './App.css';
import Hello from './Components/Hello';
import HelloClass from './Components/HelloClass';
function App(){
  return(   
    <>
      <Hello name={'John'} surname={'Smith'}/>
      <Hello name={'Tom'} surname={'Fox'}/>
      <Hello name={'Ann'} surname={'Tompson'}/>
      <HelloClass name={"Vasya"} surname={"Ivanov"} />
    </>
  );
}
export default App;