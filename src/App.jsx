import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Router, Routes } from 'react-router-dom'
import Cart1 from './pages/Cart/Cart1'
import Order from './pages/PlaceOrder/Order'
import Hom from './pages/Home/Hom'




const App = () => {
  return (
    <div className='app'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Hom/>}/>
          <Route path='/Cart' element={<Cart1/>}/>
          <Route path='/order' element={<Order/>}/>

        </Routes>
    </div>
  ) 
}

export default App
