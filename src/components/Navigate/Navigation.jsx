import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../Body/LandingPage'
import AddToCart from '../Header/Addtocart'
import Dashboard from '../Header/Dashboard'
import Login from '../Header/Login'
import Signin from '../Header/Signin'
import Address from '../Menu/Address'
import AllProduct from '../Menu/AllProduct'
import Deals from '../Menu/Deals'
import PaymentSuccess from '../Menu/PaymentSuccess'

const Navigation = () => {
  const userDetail = JSON.parse(localStorage.getItem("KFC-user")) || [];

  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/menu' element={<AllProduct />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
        <Route path='/addtocart' element={userDetail.length !== 0 ? <AddToCart /> : <Login />}></Route>
        <Route path='/deals' element={<Deals />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/address' element={<Address />}></Route>
        <Route path='/dashboard' element={userDetail.length !== 0 ? <Dashboard /> : <Login />}></Route>
        <Route path='/paymentsuccess' element={<PaymentSuccess />}></Route>
      </Routes>
    </div>
  )
}

export default Navigation
