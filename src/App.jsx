import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import AllProducts from './pages/AllProducts'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/allProducts' element={<AllProducts/>}/>
      </Routes>
    </div>
  )
}

export default App
