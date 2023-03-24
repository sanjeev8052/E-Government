
import { Box, useTheme, Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, } from '@mui/material'

import { tokens } from '../../Global'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getblkEmp, unblockEmp } from '../../Action/Admin/Employee'
import AdminAuth from '../ProtectedRoute/AdminAuth'


const BlockEmployee = () => {

  const themes = useTheme()
  const colors = tokens(themes.palette.mode)
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch()
  const { loading, blkemp } = useSelector((state) => (state.admin))



  const handleClickOpen = () => {
    setOpen(true);
    dispatch(getblkEmp())
    
  };
  
  console.log(blkemp)
  const handleClose = () => {
    setOpen(false);
  };

  const unblock = (id) => { 
    dispatch(unblockEmp(id))
    window.location.reload()
   }

  return (
    <>
      <Box>
        <Button variant="contained" onClick={handleClickOpen} color="secondary" sx={{ borderRadius: "100px" }}>
          Block Employee
        </Button>
        <Dialog open={open} onClose={handleClose} maxWidth="md"
          PaperProps={{ sx: { width: "80%", position: "fixed", m: 0, top: 20, backgroundImage: 'radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%)', } }} >
          <DialogTitle>
            <Typography variant="h4" color={colors.blueAccent[400]}>Employee Request</Typography>
          </DialogTitle>
          <DialogContent>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: 'fit-content',

            }}>

              <TableContainer component={Paper} >
                <Table size="medium" sx={{ minWidth: 650 }}>
                  <TableHead sx={{ backgroundColor: colors.greenAccent[700] }}>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Gender</TableCell>
                      <TableCell>Phone NO.</TableCell>
                      <TableCell>Buttons</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody sx={{ backgroundColor: colors.blueAccent[800]}}  >
                    {
                       blkemp <= 0 ? <TableRow>
                        <TableCell colSpan={6}>
                            <Typography sx={{ margin: "10px auto", width: "10rem" }} variant="h2" color="primary">No Blocked Employee Data</Typography>
                        </TableCell>
                    </TableRow>
                    :
                  blkemp?.map((data) => (
                    <TableRow key={data._id}  >
                      <TableCell >{data.name}</TableCell>
                      <TableCell >{data.email}</TableCell>
                      <TableCell >{data.gender}</TableCell>
                      <TableCell >{data.phone}</TableCell>
                      <TableCell > <Button color="success" variant="contained" sx={{ borderRadius: "100px" }} onClick={() => { unblock(data._id) }}>
              Unblock
            </Button>
                      </TableCell>
                    </TableRow>
                  ))
                }
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </DialogContent>
          <DialogActions sx={{ ml: "10px" }}>
            <Button onClick={handleClose} color="error" variant="contained" sx={{ borderRadius: "100px" , mr:"10px", mb:"5px" }}>
              Close
            </Button>
          </DialogActions>
        </Dialog>

      </Box>
    </>
  )
}

export default  AdminAuth(BlockEmployee)