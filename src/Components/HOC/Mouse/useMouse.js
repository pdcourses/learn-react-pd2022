import React, {useState, useEffect} from 'react'

export default function useMouse() {
  const [mouse, setMouse] = useState([0,0]);
  useEffect( () => {
    const handleXY = ({clientX, clientY}) => setMouse([clientX, clientY]);
    document.body.addEventListener('mousemove', handleXY);
    return () => {
        document.body.removeEventListener('mousemove', handleXY);
    }
  }, []);
  return mouse;
}
