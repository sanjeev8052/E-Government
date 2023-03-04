import React from 'react'
import Carousel from '../Carousel'
import Header from '../Layout/Header/Header'
import Footer  from '../Layout/Footer/Footer'
import './Home.css'
import Card from '../../Card'

const Home = () => {
  return (
    <div className='home' >
      <Header/>
    <Carousel/>
    <Card/>
    <Footer/>
    </div>
  )
}

export default Home
