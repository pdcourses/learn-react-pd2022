import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { useReducer } from 'react';

const initialState = {count: 0};

function reducer(state, action) {
  console.log('action',action);
  console.log('action value',action.step);
  switch (action.type) {
    case 'increment':
      return {count: state.count + action.step};
    case 'decrement':
      return {count: state.count - action.step};
    default:
      throw new Error();
  }
}

export default function CounterFun(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {step} = props;
  return (
    <>
        <h2>Counter {state.count}</h2>
        <button onClick={() => dispatch({type: 'increment', step: step})}>+</button>
        <button onClick={() => dispatch({type: 'decrement', step: step})}>-</button>
    </>
  )
}

CounterFun.propTypes = {
    step: PropTypes.number
  }
  
  CounterFun.defaultProps = {
    step: 1,
  }
