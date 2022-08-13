import React from 'react'
import {Link, Route, Routes} from 'react-router-dom';

export default function Products() {
  return (
    <main>
      <h2>Products page</h2>
      <Link to='hp'>HP category</Link>
      <Link to='asus'>ASUS category</Link>
      <Link to='apple'>Apple category</Link>
      <Routes>
        <Route path='hp' element={<div>HP page</div>} />
        <Route path='asus' element={<div>Asus page</div>} />
        <Route path='apple' element={<div>Apple page</div>} />
      </Routes>
    </main>
  )
}