import React from 'react'
import Navbar from './component/navbar/Navbar'
import Categories from './component/categories/Categories'
import Home from './component/home/Home'
import Products from './component/products/Products'
import About from './component/about/About'
import Create from './component/create/Create'
import Loading from './component/loading/Loading'
import Product from './component/product/Product'
import Limitproducts from './component/products/Limitproducts'
import Quote from './component/quote/Quote'
import Footer from './component/footer/Footer'
import {Route,Routes} from 'react-router-dom'

import ProductsByCcategory from './component/products/ProductsByCcategory'

export default function App() {
  return (
    <>
  <Navbar/>
  <Quote/>
  <Limitproducts/>
  <About/>
  
 
    <Routes>
      <Route path='/' element={<Home/>}/>
      
      <Route path='/categories' element={<Categories/>}/>
      <Route path='/category/:category' element={<ProductsByCcategory/>}/>

      <Route path='/products' element={<Products/>}/>
      <Route path='/product/:id' element={<Product/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/*' element={<h2>page not found</h2>}/>
  
     
    </Routes>
   <Footer/>
    </>
  )
}

