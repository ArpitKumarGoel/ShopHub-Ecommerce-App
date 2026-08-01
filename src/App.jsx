import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import Product_Detail from "./pages/Product_Detail"
import All_Products from './components/All_Products'
import ProductByCategory from './pages/ProductByCategory'
import Search_Product from './pages/Search_Product'
import DataState from './context/DataState'

const App = () => {
  return (
    <DataState>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<All_Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<Product_Detail />} />
          <Route path="/product/category/:cat" element={<ProductByCategory />} />
          <Route path="/product/search/:term" element={<Search_Product />} />
        </Routes>
      </Router>
    </DataState>
  )
}

export default App