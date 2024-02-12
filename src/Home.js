import React from 'react'
import HeroSection from './common/HeroSection'
import Services from './components/Services';
import Trusted from './components/Trusted';

const Home = () => {
  const data = {
    name: "ecommerce store",
  };

  return (
    <>
      <HeroSection myData={data}/>
      <Services/>
      <Trusted/>
    </>
  )
}

export default Home