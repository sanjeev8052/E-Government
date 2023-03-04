
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme, Paper, Button } from '@mui/material'
import React, {  useEffect } from 'react'

import AdminSidebar from '../Global/AdminSidebar'
import AdminTopbar from '../Global/AdminTopbar'
import EmpModel from '../Global/EmpModel'
import Header from '../Global/Header'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Layout/Loader'
import { tokens } from '../../Global'
import { blockEmp, getEmp } from '../../Action/Admin/Employee'
import { BlockTwoTone } from '@mui/icons-material'
import { useNavigate } from 'react-router'
import { getCompReq } from '../../Action/Services/Services'


const AdminComplaint = () => {
    const themes = useTheme()
    const colors = tokens(themes.palette.mode)
    const {  isAuthenticated ,loading ,getComReq } = useSelector((state) => (state.services))
    // const {  data } = useSelector((state) => (state.admin.data))
    //    console.log(data)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        isAuthenticated ? navigate('/acomplaint') : navigate('/adlogin')
        dispatch(getCompReq())
    }, [isAuthenticated, dispatch, navigate])

    const block = (id) => {
        dispatch(blockEmp(id))
        dispatch(getEmp())
    }
    return (
        <div className='app'>
            <AdminSidebar />
            <main className='content'>
                <AdminTopbar />
                <Box m="15px">
                            <Box display="flex" justifyContent="space-between" alignItems="center">
                                <Header title="Complaints" subtitle="Welcome Your Copmliants Details Page" />
                                <EmpModel />

                            </Box>
                            {
                            loading ? <Loader/> : 
                            <Box alignItems="center" justifyContent="center" m="15px" >
                                <Typography variant="h3" color={colors.redAccent[600]}>Employees Details</Typography>
                                <TableContainer sx={{ mt: "10px" }} component={Paper}>
                                    <Table size='small' >
                                        <TableHead  >
                                            <TableRow sx={{ backgroundColor: colors.greenAccent[800] }}>
                                                <TableCell>Name</TableCell>
                                                <TableCell>Email</TableCell>
                                                <TableCell>Phone NO.</TableCell>
                                                <TableCell>Complaint Type</TableCell>
                                                <TableCell>City</TableCell>
                                                <TableCell>StreetAddress</TableCell>
                                                <TableCell>Area</TableCell>
                                                <TableCell>Pincode</TableCell>
                                                <TableCell>Complaint Description</TableCell>
                                                <TableCell>Actions</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                           
                                            {
                                               
                                        getComReq?.map((data) => (
                                            <TableRow key={data._id}>
                                                <TableCell >{data.name}</TableCell>
                                                <TableCell >{data.email}</TableCell>
                                                <TableCell >{data.phone}</TableCell>
                                                <TableCell >{data.complaintType}</TableCell>
                                                <TableCell >{data.city}</TableCell>
                                                <TableCell >{data.streetAddress}</TableCell>
                                                <TableCell >{data.area}</TableCell>
                                                <TableCell >{data.pincode}</TableCell>
                                                <TableCell >{data.complaintDesc}</TableCell>
                                                <TableCell >
                                                    {/* <IconButton aria-label="block" color='error'>
                                                        <BlockTwoTone/>
                                                      
                                                    </IconButton> */}
                                                    <Button variant="contained" color="primary" size='small' sx={{borderRadius:"100px"}} onClick={() => { block(data._id) }}><BlockTwoTone/> Block
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    }
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                           }
                        </Box>
 
            </main>
        </div>
    )
}

export default AdminComplaint