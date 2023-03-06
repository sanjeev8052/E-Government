import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import { Box, Button, FormControl, MenuItem, Select,  Typography } from '@material-ui/core';
import { Send } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Footer from '../Layout/Footer/Footer';
import bgImage from '../../Images/bgImage3.jpg'


const useStyles = makeStyles({
  Complaint: {
    width:"100vw",
    height:"50vh",
    paddingTop:"4rem",
    backgroundImage:`url(${bgImage})`,
    backgroundSize: "cover"
  },
  box: {
    width: "80%",
    margin: "4rem auto",
    backgroundColor: "white",
    padding: "2rem",
    boxShadow: "3px 3px 6px ",
    borderRadius: "10px",

  },
  halfInput: {
    width: "35%",
    margin: " 0  15px 15px 0 ",
    padding:"0"
  },
  fullInput: {
    width: "71%",
    marginBottom: "15px",

  },

  dropdown: {
    width: "71%",
    marginBottom: "15px",

  },
  button: {
    width: "71%"
  }
});

const Complaint = () => {
  const [selected, setSelected] = useState('');

  const selectionChangeHandler = (event) => {
    setSelected(event.target.value);
  };

  const classes = useStyles();
  return (
 

    <div className={classes.Complaint}>
      <Box className={classes.box} >
        <Typography variant="h4" sx={{ marginBottom: "20px" }} color="initial">New Complaint</Typography>

        <Typography variant="h6" color="initial">Complaint Category</Typography>
        <FormControl className={classes.dropdown} >
          <Select size='small' value={selected} onChange={selectionChangeHandler}>
            <MenuItem value={"Roads & Footpath"}>Roads & Footpath</MenuItem>
            <MenuItem value={"Water Suppy"}>Water Suppy</MenuItem>
            <MenuItem value={"Street Light"}>Street Light</MenuItem>
            <MenuItem value={"Dead Animals"}>Dead Animals</MenuItem>
            <MenuItem value={"Public Park And Garden"}>Public Park And Garden</MenuItem>
            <MenuItem value={"Food Safety Act"}>Food Safety Act</MenuItem>

          </Select>
        </FormControl>



        <Typography variant="h6" color="initial">Address</Typography>
        <TextField className={classes.halfInput}
          id=""
          placeholder='City'
          variant='outlined'
          size='small'
        />
        <TextField className={classes.halfInput}
          id=""
          placeholder='Street Address '
          variant='outlined'
           size='small'
        />
        <div style={{ display: "flex" }}>
          <Typography className={classes.fullInput} variant="h6" color="initial">Name</Typography>
          <Typography className={classes.fullInput} variant="h6" color="initial">Name</Typography>
        </div>
        <TextField className={classes.halfInput}
          id=""
          placeholder='Area Name '
          variant='outlined'
           size='small'
        />
        <TextField className={classes.halfInput}
          id=""
          placeholder='Zip No. '
          variant='outlined'
           size='small'
        />

        <Typography variant="h6" color="initial">Compplaint Description </Typography>
        <textarea style={{ width: "71%", marginBottom: "15px" }} name="" id="" rows="5"></textarea>
        <hr />
        <Typography variant="h5" color="initial">
          COMPLAINER'S PERSONAL DETAILS
        </Typography>
        <hr />
        <Typography variant="h6" color="initial">Name</Typography>
        <TextField className={classes.halfInput}
          id=""
          placeholder='Enter First Name '
          variant='outlined'
           size='small'
        />


        <TextField className={classes.halfInput}
          id=""
          placeholder='Enter Last Name '
          variant='outlined'
           size='small'
        />
        <Typography variant="h6" color="initial">Email</Typography>
        <TextField className={classes.fullInput}
          id=""
          placeholder='Enter Enter Your Email '
          variant='outlined'
           size='small'
        />
        <Typography variant="h6" color="initial">Mobile No.</Typography>
        <TextField className={classes.fullInput}
          id=""
          placeholder='Enter Enter Your Email '
          variant='outlined'
           size='small'
        />
        <Button component={Link} className={classes.button} to='' variant="contained" endIcon={<Send />}>

          Complaint Request
        </Button>

      </Box>
      <Footer/>
    </div>
  )
}

export default Complaint
