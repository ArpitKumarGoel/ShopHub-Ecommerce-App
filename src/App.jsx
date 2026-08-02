import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router'

import Navbar from './components/NavBar.jsx'
import Cart from './pages/Cart'
import Product_Detail from "./pages/Product_Detail.jsx"
import All_Products from './components/All_Products.jsx'
import ProductByCategory from './pages/ProductByCategory.jsx'
import Search_Product from './pages/Search_Product.jsx'
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