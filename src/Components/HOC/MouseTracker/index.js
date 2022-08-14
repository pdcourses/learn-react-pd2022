import React from 'react'
import MouseCoords from '../MouseCoords';
import Mouse from '../Mouse';

function MouseTracker(props) {
  return (
    <div>
        <p>Подвиньте мышку</p>
        <MouseCoords render={(mouse) => <Mouse mouse={mouse} />}/>
    </div>
  )
}

export default MouseTracker;