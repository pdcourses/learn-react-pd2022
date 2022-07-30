import React from 'react'
export default function Range1(props) {
  const add = () => {
    props.setValue(props.value+1);
  } 
  return (
    <div>
        <button onClick={add}>add</button>
        <p>{props.value}</p>
    </div>
  )
}
