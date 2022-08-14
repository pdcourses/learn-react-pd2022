import React from 'react'
import Mouse from '../Mouse';
import Cat from '../Cat';

function MouseTracker(props) {
  return (
    <>
        <p>Подвиньте мышку</p>
        <Mouse render={(mouse) => <Cat mouse={mouse} />}/>
    </>
  )
}

export default MouseTracker;