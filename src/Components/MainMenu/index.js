import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from '../Header';

export default function MainMenu() {
  return (
    <div>
        <Header />
        <Outlet />
        <p>some text</p>
    </div>
  )
}
