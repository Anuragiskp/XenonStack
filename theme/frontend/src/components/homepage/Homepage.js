import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Slideshow from './Slideshow'
import GridComponent from './GridComponent'
import ProductCard from './ProductCard'

function Homepage() {
  return (
    <div>
        <Header />
        <Slideshow />
        <GridComponent />
        <ProductCard />
        <Footer />
    </div>
  )
}

export default Homepage