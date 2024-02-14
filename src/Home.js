import React from 'react'
import HeroSection from './common/HeroSection'
import Services from './components/Services';
import Trusted from './components/Trusted';
import FeatureProduct from './components/FeatureProduct';
// import { useProductContext } from './context/productContext';
// import { useContext } from 'react';
// import { AppContext } from './context/productContext';

const Home = () => {
  // const {naam} = useProductContext();
  const data = {
    name: "ecommerce store",
  };

  return (
    <>
      {/* <div>{naam}</div> */}
      <HeroSection myData={data}/>
      <FeatureProduct/>
      <Services/>
      <Trusted/>
    </>
  )
}

export default Home