import React from 'react'
import {Link, Route, Routes, NavLink} from 'react-router-dom'
import About from './Pages/About';
import Home from './Pages/Home';
import Products from './Pages/Products';
import NotFound from './Pages/NotFound';
import MainMenu from './Components/MainMenu';
import Header from './Components/Header';
import CounterFun from './Components/CounterFun';


export default function App() {
  return (
    <>
      <CounterFun step={10}/>
      <Routes>
          <Route path='/' element={<MainMenu />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='products/*' element={<Products />} />
            <Route path='*' element={<NotFound />} />
          </Route>
      </Routes>
    </>
  )
}
