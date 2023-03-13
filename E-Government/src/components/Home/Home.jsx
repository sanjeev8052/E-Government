import React from 'react'
import Carousel from '../Layout/Carousel'
import Header from '../Layout/Header/Header'
import Footer  from '../Layout/Footer/Footer'
import './Home.css'
import Card from '../../Card'
import Typography from '@mui/material/Typography'
import { useSelector } from 'react-redux'

const Home = () => {
  const {isAthenticated} = useSelector(state=>state.user)
  return (
    <div className='home' >
      <Header/>
    <Carousel/>
    <Typography sx={{width:"50%" , margin:" 3rem auto" , textAlign:"center"}} variant="h2" color="initial">

    WELCOME TO PROFILE BASED E-GOVERNANCE ONLINE SERVICE PORTAL 
    </Typography>
    <Card/>
    <Footer/>
    </div>
  )
}

export default Home
