import React, {useEffect} from 'react'
import {useNavigate, Link} from 'react-router-dom';

export default function NotFound() {
  const navi = useNavigate();

  useEffect( () => {
    setTimeout( () => {
        navi('/');
    }, 5000);
  })

  return (
    <>
        <h2>This page not found</h2>
        <Link to='/'>Home</Link>
    </>    
  )
}
