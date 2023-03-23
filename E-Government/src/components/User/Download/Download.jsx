import React, { useState } from 'react'
import { Box, Typography, TextField, Button } from '@material-ui/core'
import './Download.css'
import { AssuredWorkloadOutlined } from '@mui/icons-material'
import Footer from '../../Layout/Footer/Footer'
import { useFormik } from 'formik'
import { downloadSchema } from '../../../ValidateSchema/Services'
import sujeet from '../../../Images/s.jpg'
const Download = () => {


  const [data, setData] = useState();
  const initialValues = {
  }
  const { values, touched, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: downloadSchema,
    onSubmit: (values) => {
      console.log(values)
    }
  })
  return (
    <Box className='download'>
      {/* <form  onSubmit={handleSubmit}>
                <div className="form">
                    <h1>Download Certificate</h1>
                    <Typography variant="h4" className='mt-5' color="initial">
                        Enter Certificate No.
                    </Typography>
                    <TextField className='mb-5 mt-1' fullWidth
                        id=""
                        label=""
                        variant='outlined'
                        size='small'
                        name='certificateNo'
                        onChange={handleChange}
                        type='number'
                        placeholder=' Enter Certificate No.'
                    />
                    {errors.certificateNo   && (
                        <Typography className='text-danger'>{errors.certificateNo}</Typography>
                    ) }
                    <Button type='submit' variant="contained" className='mb-5' color="primary">
                        Search
                    </Button>
                </div>
            </form> */}
      <Box className='mainBox'>
        <Box className="row rowHeader">
          <Box className="col-sm-4">
            <AssuredWorkloadOutlined sx={{ color: "black", fontSize: "3rem" }} />
          </Box>
          <Box className="col-sm-8">
            <Typography variant='h3' color="initial">E-Governance</Typography>
          </Box>
        </Box>
        <div className=" text-center m-5">
          <h2>Government Of India</h2>
          <h2>Cast Certificate</h2>
        </div>
        <div className="row p-5">
          <div className="col-sm-4 ">
            <Typography variant="h6" className='mt-3' color="initial">Name</Typography>
            <Typography variant="h6" className='mt-3' color="initial">Father Name</Typography>
            <Typography variant="h6" className='mt-3' color="initial">Mother Name</Typography>
            <Typography variant="h6" className='mt-3' color="initial">Gender</Typography>
            <Typography variant="h6" className='mt-3' color="initial">Cast</Typography>
          </div>
          <div className="col-sm-4">
            <Typography variant="h6" className='mt-3' color="initial">Name</Typography>
            <Typography variant="h6" className='mt-3' color="initial">Father Name</Typography>
            <Typography variant="h6" className='mt-3' color="initial">Mother Name</Typography>
            <Typography variant="h6" className='mt-3' color="initial">Gender</Typography>
            <Typography variant="h6" className='mt-3' color="initial">Cast</Typography>
          </div>
          <div className="col-sm-4">
            <img className='image mt-3' src={sujeet} alt="" />
          </div>
          <div className="col-lg-12 mt-5">
            <h5>This is to certify that "Sujeet maurya" son of  "her father" Of village "village Name" , teshil "teshil" ,
              in the district of "District Name" in the State Of "State name"  belongs to "Cast type". </h5><br /><br />
            <h5>
              "Sujeet maurya" and/or her family ordinarly resides in village "villaage name" , teshil "teshil" ,
              in the district of "District Name" 
            </h5>
          </div>
          <div className="col-sm-4">

          </div>
          <div className="col-sm-4">

          </div>
          <div className="col-sm-4 mt-5">
            <h5>Date </h5>
            <h5>Signature</h5>
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

export default Download
