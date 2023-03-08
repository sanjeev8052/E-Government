import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import { Box, Button, FormControl, MenuItem, Select, Typography } from '@material-ui/core';
import { Send } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Footer from '../Layout/Footer/Footer';
import bgImage from '../../Images/bgImage3.jpg'
import { useFormik } from 'formik'
import { complaintSchema } from '../../ValidateSchema/Services';
import { useDispatch, useSelector } from 'react-redux';
import { LoadUser } from '../../Action/User';
import Loader from '../Layout/Loader'
import { CompReq } from '../../Action/Services/Services';


const useStyles = makeStyles({
  Complaint: {
    width: "100vw",
    height: "50vh",
    paddingTop: "4rem",
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",

  },
  box: {
    width: "80%",
    margin: "4rem auto",
    backgroundColor: "white",
    padding: "2rem",
    boxShadow: "3px 3px 6px ",
    borderRadius: "10px",

  },

  fullInput: {
    width: "71%",
    marginBottom: "10px"

  },

  dropdown: {
    width: "71%",
    marginBottom: "15px",

  },
  button: {
    width: "71%"
  },
  error: {
    color: "red",
    marginBottom: "10px"
  },
  label: {
    marginTop: "15px"
  }
});

const Complaint = () => {
  const { userData , loading } = useSelector(state => state.user)
  const dispatch = useDispatch()

  const initialvalues = {
    complaintType: "",
    city: "",
    streetAddress: "",
    area: "",
    pincode: "",
    complaintDesc: "",
    name: "",
    email: "",
    phone: "",

  }
  const { values, touched, errors, handleBlur, handleChange, handleSubmit } = useFormik({

    initialValues: initialvalues,
    validationSchema: complaintSchema,
    
    onSubmit: (values) => {
    
      console.log(values)
      //  dispatch(CompReq(values))
    }


  })


  console.log(errors)
  const classes = useStyles();
  return (


    <div className={classes.Complaint}>
      <form onSubmit={handleSubmit} className={classes.box} >

        <Typography variant="h4" sx={{ marginBottom: "20px" }} color="initial">New Complaint</Typography>

        <Typography className={classes.label} variant="h6" color="initial">Complaint Category</Typography>
        <FormControl className={classes.dropdown} >
          <Select size='small'
            name='complaintType'
            value={values.complaintType}
            onChange={handleChange}
            onBlur={handleBlur}
          >

            <MenuItem value={"Roads & Footpath"}>Roads & Footpath</MenuItem>
            <MenuItem value={"Water Suppy"}>Water Suppy</MenuItem>
            <MenuItem value={"Street Light"}>Street Light</MenuItem>
            <MenuItem value={"Dead Animals"}>Dead Animals</MenuItem>
            <MenuItem value={"Public Park And Garden"}>Public Park And Garden</MenuItem>
            <MenuItem value={"Food Safety Act"}>Food Safety Act</MenuItem>

          </Select>
        </FormControl>
        {errors.complaintType && touched.complaintType ? (
          <Typography className={classes.error}   >{errors.complaintType}</Typography>
        ) : null}
        <Typography variant="h6" color="initial">Address</Typography>
        <TextField className={classes.fullInput}
          id=""
          placeholder='City'
          variant='outlined'
          size='small'
          name='city'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.city}
        />
        {errors.city && touched.city ? (
          <Typography className={classes.error} >{errors.city}</Typography>
        ) : null}


        <TextField className={classes.fullInput}
          id=""
          placeholder='Street Address '
          variant='outlined'
          size='small'
          name='streetAddress'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.streetAddress}


        />
        {errors.streetAddress && touched.streetAddress ? (
          <Typography className={classes.error} >{errors.streetAddress}</Typography>
        ) : null}

        <TextField className={classes.fullInput}
          id=""
          placeholder='Area Name '
          variant='outlined'
          size='small'
          name='area'
          onChange={handleChange}
          value={values.area}
          onBlur={handleBlur}
        />
        {errors.area && touched.area ? (
          <Typography className={classes.error} >{errors.area}</Typography>
        ) : null}
        <TextField className={classes.fullInput}
          id=""
          placeholder='Zip No. '
          variant='outlined'
          size='small'
          name='pincode'
          onChange={handleChange}
          value={values.pincode}
          onBlur={handleBlur}
        />
        {errors.pincode && touched.pincode ? (
          <Typography className={classes.error} >{errors.pincode}</Typography>
        ) : null}

        <Typography variant="h6" color="initial">Compplaint Description </Typography>
        <textarea
          style={{ width: "71%", marginBottom: "15px" }}
          name="complaintDesc"
          id="" rows="5"
          value={values.complaintDesc}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.complaintDesc && touched.complaintDesc ? (
          <Typography className={classes.error} >{errors.complaintDesc}</Typography>
        ) : null}
        <hr />
        <Typography variant="h5" color="initial">
          COMPLAINER'S PERSONAL DETAILS
        </Typography>
        <hr />
        {
          loading ? <Loader /> :
            <>
              <Typography variant="h6" color="initial">Name</Typography>
              <TextField className={classes.fullInput}
                id=""
                placeholder='Enter First Name '
                variant='outlined'
                size='small'
                name='name'
            
                value={ userData.name  && userData.name}

              />


              <Typography variant="h6" color="initial">Email</Typography>
              <TextField className={classes.fullInput}
                id=""
                placeholder='Enter Enter Your Email '
                variant='outlined'
                size='small'
                name='email'
                onChange={handleChange}
                value={userData.email  && userData.email }

              />
              <Typography variant="h6" color="initial">Mobile No.</Typography>
              <TextField className={classes.fullInput}
                id=""
                placeholder='Enter Enter Your phone no '
                variant='outlined'
                size='small'
                name='phone'
                onChange={handleChange}
                value={userData.phone && userData.phone }
                
              />
            </>
        }

        <Button type='submit' className={classes.button} variant="contained" endIcon={<Send />}>

          Complaint Request
        </Button>

      </form>

      <Footer />
    </div>
  )
}

export default Complaint
