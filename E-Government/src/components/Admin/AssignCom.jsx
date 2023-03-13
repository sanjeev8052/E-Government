
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme, Paper, IconButton, TextField, Button } from '@mui/material'
import React, { useEffect } from 'react'
import AdminSidebar from '../Global/AdminSidebar'
import AdminTopbar from '../Global/AdminTopbar'


import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Layout/Loader'
import { tokens } from '../../Global'
import { DangerousTwoTone, TaskTwoTone } from '@mui/icons-material'
import { useNavigate } from 'react-router'
import {  getAccCom,  } from '../../Action/Services/Services'


import Header from '../Global/Header'
import { Link } from 'react-router-dom'
const AssignCom = () => {
    const themes = useTheme()
    const colors = tokens(themes.palette.mode)
    const { loading, getAccReq } = useSelector((state) => (state.services))
    const { isAuthenticated } = useSelector((state) => (state.admin))
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        isAuthenticated ? navigate('/assign') : navigate('/adlogin')
        dispatch(getAccCom())
    }, [isAuthenticated, dispatch, navigate])



    return (
        <div className='app'>
            <AdminSidebar />
            <main className='content'>
                <AdminTopbar />

                <Box m="15px">
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Header title="Assign Complaint" subtitle="Welcome Your Assign Complaint Page" />
                    </Box>
                    {
                    loading ? <Loader /> :
                            <Box alignItems="center" justifyContent="center" m="15px" >
                                <Typography variant="h3" color={colors.redAccent[600]}>Complaint Details</Typography>
                                <TableContainer sx={{ mt: "10px", minWidth: 200 }} component={Paper}>
                                    <Table size='small' >
                                        <TableHead  >
                                            <TableRow sx={{ backgroundColor: colors.greenAccent[800] }}>
                                                <TableCell>City</TableCell>
                                                <TableCell>StreetAddress</TableCell>
                                                <TableCell>Area</TableCell>
                                                <TableCell>Pincode</TableCell>
                                                <TableCell>Complaint Description</TableCell>
                                                <TableCell>Actions</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>

                                            {getAccReq <= 0 ? <TableRow>
                                                <TableCell colSpan={6}>
                                                    <Typography sx={{ margin: "10px auto", width: "10rem" }} variant="h2" color="primary">No Complaint Data</Typography>
                                                </TableCell>
                                            </TableRow> : getAccReq?.map((data) => (
                                                <TableRow key={data._id}>
                                                    <TableCell >{data.city}</TableCell>
                                                    <TableCell >{data.streetAddress}</TableCell>
                                                    <TableCell >{data.area}</TableCell>
                                                    <TableCell >{data.pincode}</TableCell>
                                                    <TableCell component='th' scope='row'>{data.complaintDesc}</TableCell>
                                                    <TableCell >
                                                        <Link to={`/assigncom/${data._id}`}>
                                                        <Button variant="contained" color="primary" size='small' sx={{ borderRadius: "100px" }} >Assign</Button>
                                                        </Link>
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

export default AssignCom