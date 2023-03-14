import React, { useEffect, useState } from 'react'

import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik'
import { Button } from '@material-ui/core'
import { Box, useTheme, Dialog, DialogTitle, DialogContent, DialogActions, Typography, FormControl, InputLabel, Select, MenuItem, } from '@mui/material'
import { tokens } from '../../Global'
import { useDispatch, useSelector } from 'react-redux';
import { Await, useParams } from 'react-router-dom';
import { loadCom } from '../../Action/Services/Services'
import axios from 'axios';
import { Assignment, Done } from '@mui/icons-material';
const useStyle = makeStyles({
  input: {
    width: "100%",
    margin: "0.5rem 0 "

  }
  , box: {
    width: "50%"
  }
})


const AssignModel = () => {
  const [dept, setDept] = useState("");
  const [emp, setEmp] = useState([]);
  const classes = useStyle()
  const themes = useTheme()
  const colors = tokens(themes.palette.mode)
  const { _id } = useParams();
  const [details, setDetails] = useState({})
  
  useEffect(() => {
    loaddetails()
  }, [])
  const loaddetails = async () => {
    const response = await axios.get(`/api/admin/compdata/${_id}`)
    setDetails(response.data)
  }

  useEffect(() => {
    //loademp()
    const loademp = async (dept) =>{
      const res = await axios.post(`/api/admin/deptwise`, dept)
      setEmp(res.data)
      console.log(emp)
    }
    loademp()
  }, [dept])
  


  // const handledept = (event) => {
  //   const getvalue = event.target.value;
  //   console.log(getvalue)
  //  setDept(getvalue);
  //  //loademp()
  //  console.log(dept)
  // };


  return (
    <>

      <Box >
        <Dialog open="true" maxWidth="md"
          PaperProps={{ sx: { width: "80%", position: "fixed", m: 0, top: 20, backgroundImage: 'radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%)', } }} >
          <DialogTitle>
            <Typography variant="h3" color={colors.redAccent[400]}>Assign</Typography>
          </DialogTitle>
          <DialogContent>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: '50%',
              backgroundColor: "white",
              padding: "2rem",
              borderRadius: "10px",
              boxShadow: "3px 3px 6px"

            }}>
              <TextField
                className={classes.input}
                
                placeholder='City'
                variant='outlined'
                size='small'
                name='city'
                value={details.city}

              />
              <TextField
                className={classes.input}
                id=""
                placeholder='Street Address '
                variant='outlined'
                size='small'
                name='streetAddress'

                value={details.streetAddress}
              />
              <TextField
                className={classes.input}
                id=""
                placeholder='Area Name '
                variant='outlined'
                size='small'
                name='area'
                value={details.area}

              />
              <Typography variant="h6" color="initial">Compplaint Description </Typography>
              <textarea
                className={classes.input}
                name="complaintDesc"
                id="" rows="3"
                value={details.complaintDesc}

              />

              <FormControl fullWidth variant="standard" sx={{marginBottom:"2rem"}}  InputLabelProps={{ style: { fontSize: 20 } }} size="small">
                <InputLabel>Department</InputLabel>
                <Select

                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="dept"
                  label="Department"
                  InputLabelProps={{ style: { fontSize: 20 } }}
                  placeholder="select Department"
                  onChange={(e) => { setDept(e.target.value) }}
                >
                  <MenuItem value="road">Road</MenuItem>
                  <MenuItem value="Water">Water</MenuItem>
                  <MenuItem value="Drain">Drain</MenuItem>
                </Select>
              </FormControl>

              <Button variant='contained' color='primary'>
                Asign 
              </Button>
            </Box>
          </DialogContent>
          <DialogActions sx={{ ml: "10px" }}>
            <Button color="error" variant="contained" sx={{ borderRadius: "100px", mr: '10px', mb: '5px' }}>
              Close
            </Button>
          </DialogActions>
        </Dialog>

      </Box>
    </>
  )
}

export default AssignModel