import React from 'react'
import ProductsData from '../products/ProductsData'
import CardNavbar from '../components/nav_components/CardNavbar'
import Footer from '../components/nav_components/Footer'

const Products = () => {
  return (
    <>
    <CardNavbar/>
    <ProductsData/>
    <Footer/>
    </>
  )
}

export default Products