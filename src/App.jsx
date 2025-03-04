import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import AllProducts from './pages/AllProducts'
import SingleProducts from './pages/SingleProducts'
import Cart from './pages/Cart'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/allProducts' element={<AllProducts/>}/>
        <Route path='singleProduct' element={<SingleProducts/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App
