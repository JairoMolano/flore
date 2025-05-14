import React from 'react'
import Carousel from '../components/home/Carousel'
import AboutUs from '../components/home/AboutUs'
import FindUs from '../components/common/FindUs'
import EmblaCarousel from '../components/common/EmblaCarousel'


const Home = () => {
  return (
    <>
      <Carousel />
      <AboutUs />
      <EmblaCarousel/>
      <FindUs />
    </>
  )
}

export default Home