import React from 'react'
import HomeHero from '@components/hero/HomeHero'
import ProductsSection from '@components/products/ProductsSection'
import ServicesSection from '@components/services/ServicesSection'
import Clients from '../components/client/Clients'

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <ProductsSection />
      <ServicesSection />
      <Clients />
    </>
  )
}

export default HomePage
