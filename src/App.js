import React from 'react'
import {Link, Route, Routes, NavLink} from 'react-router-dom'
import About from './Pages/About';
import Home from './Pages/Home';
import Products from './Pages/Products';
import NotFound from './Pages/NotFound';

const Header = () => {
  <header>
    <h1>App page</h1>
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/products'>Products</NavLink>
    </nav>
  </header>
}

export default function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Header />}></Route>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products/*' element={<Products />} />
          <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}
