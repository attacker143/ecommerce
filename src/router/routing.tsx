import React from 'react'

import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import { Home } from '../components/Home'
import { Product } from '../components/Product'
import { Cart } from '../components/Cart'
import { Products } from '../components/Products'
import { Checkout } from '../components/Checkout'

export const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/product/:id' element={<Product/>} ></Route>
        <Route path='/cart' element={<Cart/>} ></Route>
        <Route path='/checkout' element={<Checkout/>} ></Route>
    </Routes>
    </BrowserRouter>
  )
}
