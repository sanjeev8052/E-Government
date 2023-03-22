import React from 'react'
import { Box, Typography } from '@material-ui/core'
import './Download.css'
import { AssuredWorkloadOutlined } from '@mui/icons-material'
import Footer from '../components/Layout/Footer/Footer'
const Temp = () => {
  return (

    <Box className='download'>
      <Box className='mainBox'>
        <Box className="row rowHeader">
          <Box className="col-sm-4">
            <AssuredWorkloadOutlined sx={{ color: "black", fontSize: "3rem" }} />
          </Box>
          <Box className="col-sm-8">
            <Typography variant='h3' color="initial">E-Governance</Typography>
          </Box>
        </Box>
        <div className=" text-center mt-5">
          <h2>Cast Certificate</h2>
        </div>
        <div className="row">
          <div className="col-sm-4">
              
          </div>
          <div className="col-sm-4">

          </div>
          <div className="col-sm-4">

          </div>
        </div>
        <Box className="rowFooter">

          <Box className="col-sm-12">
            <Typography variant='h6' color="initial">Printing  Date</Typography>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}

export default Temp
