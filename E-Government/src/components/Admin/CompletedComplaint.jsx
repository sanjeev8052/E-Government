import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme, Paper, IconButton, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { Button } from '@material-ui/core'

import AdminSidebar from '../Global/AdminSidebar'
import AdminTopbar from '../Global/AdminTopbar'

import Header from '../Global/Header'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './AdminLoader'
import { tokens } from '../../Global'
import { useNavigate } from 'react-router'
import { accCompReq, getCompReq, rejCompReq } from '../../Action/Services/Services'


const CompletedComplaint = () => {
    const themes = useTheme()
    const colors = tokens(themes.palette.mode)
    // const { loading, getComReq } = useSelector((state) => (state.services))
    // const { isAuthenticated } = useSelector((state) => (state.admin))
    // const navigate = useNavigate()
    // const dispatch = useDispatch()

    return (
        <div className='app'>
            <AdminSidebar />
            <main className='content'>
                <AdminTopbar />
                <Box m="15px">
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Header title="Completed Complaints" subtitle="Welcome Your Completed Complaints Details Page" />
                        {/* <EmpModel /> */}

                    </Box>
                    <Box display="felx" justifyContent="space-between" alignItems="center">

                    </Box>
                    <TextField sx={{ width: "80%" }}
                        id=""
                        label=""
                        variant='standard'
                        placeholder='Search by Name And Complaint Type'

                    />
                    <Button variant="text" color="default">
                        Reload
                    </Button>
                    {
                        // loading ? <Loader /> :
                            <Box alignItems="center" justifyContent="center" m="15px" >
                                <Typography variant="h3" color={colors.redAccent[600]}>Complaint Details</Typography>
                                <TableContainer sx={{ mt: "10px", minWidth: 200 }} component={Paper}>
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

                                            </TableRow>
                                        </TableHead>
                                        <TableBody>

                                            {/* {
                                                getComReq <= 0 ? <TableRow>
                                                    <TableCell colSpan={6}>
                                                        <Typography sx={{ margin: "10px auto", width: "10rem" }} variant="h2" color="primary">No Complaint Data</Typography>
                                                    </TableCell>
                                                </TableRow> : getComReq?.map((data) => (
                                                    <TableRow key={data._id}>
                                                        <TableCell >{data.name}</TableCell>
                                                        <TableCell >{data.email}</TableCell>
                                                        <TableCell >{data.phone}</TableCell>
                                                        <TableCell >{data.complaintType}</TableCell>
                                                        <TableCell >{data.city}</TableCell>
                                                        <TableCell >{data.streetAddress}</TableCell>
                                                        <TableCell >{data.area}</TableCell>
                                                        <TableCell >{data.pincode}</TableCell>
                                                        <TableCell component='th' scope='row'>{data.complaintDesc}</TableCell>

                                                    </TableRow>
                                                ))
                                            } */}
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

export default CompletedComplaint