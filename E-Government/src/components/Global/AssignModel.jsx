import React, { useEffect, useState } from 'react'

import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik'
import { Box, useTheme, Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography, FormControl, InputLabel, Select, MenuItem, } from '@mui/material'
import { tokens } from '../../Global'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadCom } from '../../Action/Services/Services'


const AssignModel = () => {




  const [details, setDetails] = useState({
    area: "",
    city: "",
    complaintDesc: "",
    streetAddress: ""
  })

   const { loadcom } = useSelector(state => state.services)

   const onChange = (e) => {
    setUsers({ ...details, [e.target.name]: e.target.value })
    // console.log(users)

}
  const themes = useTheme()
  const colors = tokens(themes.palette.mode)
  const { _id , city , area } = useParams();
  
  const dispatch = useDispatch()

  useEffect(() => {
     loaddetails()
   

  }, [])

  useEffect(() => {
    loadcom ? setDetails({
      area: loadcom.area ,
      city: loadcom.city ,
      complaintDesc: loadcom.complaintDesc,
      streetAddress: loadcom.streetAddress,
    }) : null
  }, [])


  const loaddetails = async () => {
    const res =  dispatch(loadCom(_id))
  }


  return (
    <>
      <Box>
        <Dialog open="true" maxWidth="md"
          PaperProps={{ sx: { width: "80%", position: "fixed", m: 0, top: 20, backgroundImage: 'radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%)', } }} >
          <DialogTitle>
            <Typography variant="h4" color={colors.redAccent[400]}>Assign</Typography>
          </DialogTitle>
          <DialogContent>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: 'fit-content',

            }}>
              <TextField
                //  className={classes.fullInput}
                id=""
                placeholder='City'
                variant='outlined'
                size='small'
                name='city'
               value={details.city}
               onChange={(e) => onChange(e)}
              />
              <TextField
                // className={classes.fullInput}
                id=""
                placeholder='Street Address '
                variant='outlined'
                size='small'
                name='streetAddress'
                onChange={(e) => onChange(e)}
                value={details.streetAddress}
              />
              <TextField
                //  className={classes.fullInput}
                id=""
                placeholder='Area Name '
                variant='outlined'
                size='small'
                name='area'
                value={details.area}
                onChange={(e) => onChange(e)}
              />
              <Typography variant="h6" color="initial">Compplaint Description </Typography>
              <textarea
                style={{ width: "71%", marginBottom: "15px" }}
                name="complaintDesc"
                id="" rows="5"
                value={details.complaintDesc}
                onChange={(e) => onChange(e)}
              />

              <FormControl fullWidth variant="standard" InputLabelProps={{ style: { fontSize: 20 } }} size="small">
                <InputLabel>Department</InputLabel>
                <Select

                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="dept"
                  label="Department"
                  InputLabelProps={{ style: { fontSize: 20 } }}
                  placeholder="select Department"

                >
                  <MenuItem value="Road">Road</MenuItem>
                  <MenuItem value="Water">Water</MenuItem>
                  <MenuItem value="Drain">Draint</MenuItem>
                </Select>
              </FormControl>
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