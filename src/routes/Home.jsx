import React from 'react'
import HeroSection from '../components/pages/Home/heroSection/HeroSection'
import SaleAndFeature from '../components/pages/Home/saleAndFeatureSection/SaleAndFeature'
import ProductsContainer from '../components/pages/Home/productSection/ProductsContainer'
import WhyChooseUs from '../components/pages/Home/whyChooseUs/WhyChooseUs'

const Home = () => {
  return (
    <>
       <HeroSection />
      <SaleAndFeature />
      <ProductsContainer />
      <WhyChooseUs />
    </>
  )
}

export default Home
