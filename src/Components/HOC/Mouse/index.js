import React from 'react'
import { useState } from 'react'

export default function Mouse(props) {
  const [x, setX]  = useState(0); 
  const [y, setY]  = useState(0); 
  const {render} = props;

  const handleXY = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  }
  return (
    <div onMouseMove={handleXY}>{render(x,y)} {x} {y}</div>
  )
}
