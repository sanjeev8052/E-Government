import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import { Box, Button, FormControl, MenuItem, Select, Typography, useTheme } from '@material-ui/core';
import { Send } from '@mui/icons-material';
import { Link, Navigate } from 'react-router-dom';
import Footer from '../Layout/Footer/Footer';
import { useFormik } from 'formik'
import { incomeValidation} from '../../ValidateSchema/Services';;

import axios from 'axios';

const useStyles = makeStyles({
  Complaint: {
    width: "98.9vw",
    height: "50vh",
    paddingTop: "4rem",
    background: "linear-gradient(to top right ,rgb(48, 94, 234),rgb(214, 245, 214))",
    backgroundSize: "cover",

  },
  box: {
    width: "80%",
    margin: "4rem auto",
    backgroundColor: "white",
    boxShadow: "3px 3px 6px ",
    borderRadius: "10px",
    border: " solid 1px black"

  },
  compField: {
    padding: '2rem'
  },
  userField: {
    padding: '2rem',
    backgroundColor: "gray",
    borderRadius: "0 0 10px 10px",
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

const IncomeCer = () => {
  const [file, setFile] = useState();
  const [image, setImage] = useState();

  const hnadleFile = (e) => {
    const file = e.target.files[0]
    setFile(file)

    const reader = new FileReader()
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result)
      }
    }
    reader.readAsDataURL(file)
  }



  const initialvalues = {
  }
  const { values, touched, errors, handleBlur, handleChange, handleSubmit } = useFormik({

    initialValues: initialvalues,
    validationSchema: incomeValidation,

    onSubmit: (values) => {
      try {
        if (file) {
          const formData = new FormData()
          formData.append("file", file)
          formData.append('data', JSON.stringify(values));
          // console.log(values)
          // console.log(file)
          axios.post('/api/incomereq', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })

          return
        }
        alert("please select file")
      } catch (error) {

      }
    }


  })


  const classes = useStyles();

  return (

    <div className={classes.Complaint}>
      <form onSubmit={handleSubmit} className={classes.box} encType="multipart/form-data">

        <div className={classes.compField}>
          <Typography variant="h4" sx={{ marginBottom: "20px" }} color="initial">Apply Income Certificate</Typography>
          <Typography variant="h6" color="initial">Name</Typography>
          <TextField className={classes.fullInput}
            id=""
            placeholder='Enter Your Name '
            variant='outlined'
            size='small'
            name='name'
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}

          />
          {errors.name && touched.name ? (
            <Typography className={classes.error}   >{errors.name}</Typography>
          ) : null}
          <Typography variant="h6" color="initial">Email</Typography>
          <TextField className={classes.fullInput}
            id=""
            placeholder='Enter Your Email '
            variant='outlined'
            size='small'
            name='email'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}

          />
          {errors.email && touched.email ? (
            <Typography className={classes.error}   >{errors.email}</Typography>
          ) : null}
          <Typography variant="h6" color="initial">Mobile No.</Typography>
          <TextField className={classes.fullInput}
            id=""
            placeholder='Enter Your phone no '
            variant='outlined'
            size='small'
            name='phone'
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {errors.phone && touched.phone ? (
            <Typography className={classes.error}   >{errors.phone}</Typography>
          ) : null}
          <Typography variant="h6" color="initial">Address</Typography>
          <TextField className={classes.fullInput}
            id=""
            placeholder='Enter Your Address'
            variant='outlined'
            size='small'
            name='address'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.address}
          />
          {errors.address && touched.address ? (
            <Typography className={classes.error} >{errors.address}</Typography>
          ) : null}

          <Typography variant="h6" color="initial">Father Name</Typography>
          <TextField className={classes.fullInput}
            id=""
            placeholder='Enter Your Father Name'
            variant='outlined'
            size='small'
            name='fatherName'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.fatherName}


          />
          {errors.fatherName && touched.fatherName ? (
            <Typography className={classes.error} >{errors.fatherName}</Typography>
          ) : null}
          <Typography variant="h6" color="initial">Mother Name</Typography>
          <TextField className={classes.fullInput}
            id=""
            placeholder='Enter Your Mother Name'
            variant='outlined'
            size='small'
            name='motherName'
            onChange={handleChange}
            value={values.motherName}
            onBlur={handleBlur}
          />
          {errors.motherName && touched.motherName ? (
            <Typography className={classes.error} >{errors.motherName}</Typography>
          ) : null}
             <Typography variant="h6" color="initial">Income</Typography>
          <TextField className={classes.fullInput}
            id=""
            placeholder='Enter Your Income'
            variant='outlined'
            size='small'
            name='income'
            onChange={handleChange}
            value={values.income}
            onBlur={handleBlur}
          />
          {errors.income && touched.income ? (
            <Typography className={classes.error} >{errors.income}</Typography>
          ) : null}

          <Typography variant="h6" color="initial">Uplaod Your Adhar Card</Typography>
          <div className="row">
            <div className="col-sm-6 mt-2 mb-2">
              <input type="file" className='input-upload' onChange={hnadleFile} name="" id="" />
            </div>
            <div className="col-sm-6 mt-1 mb-2" >
              <img style={{ width: "10rem" }} src={image} alt="" />
            </div>
          </div>

          <Button type='submit' color='primary' className={classes.button} variant="contained" endIcon={<Send />}>
           Apply
          </Button>
        </div>

      </form>

      <Footer />
    </div>
  )
}

export default IncomeCer