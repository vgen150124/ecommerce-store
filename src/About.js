import React from 'react'
import HeroSection from './common/HeroSection'

const About = () => {
  const data = {
    name: "About store",
  };

  return (
    <HeroSection myData={data}/>
  )
}

export default About
