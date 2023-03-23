
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme, Paper, IconButton, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { Button } from '@material-ui/core'

import AdminSidebar from '../Global/AdminSidebar'
import AdminTopbar from '../Global/AdminTopbar'

import { useAlert } from 'react-alert'
import Header from '../Global/Header'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './AdminLoader'
import { tokens } from '../../Global'
import { DangerousTwoTone, TaskTwoTone } from '@mui/icons-material'
import { useNavigate } from 'react-router'
import { accCompReq, getCompReq, rejCompReq } from '../../Action/Services/Services'


const AdminComplaint = () => {
    const themes = useTheme()
    const colors = tokens(themes.palette.mode)
    const { loading, getComReq,accComReqMs,rejComReqMs} = useSelector((state) => (state.services))
    const { isAuthenticated } = useSelector((state) => (state.admin))
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const alert = useAlert();
    useEffect(() => {
        isAuthenticated ? navigate('/acomplaint') : navigate('/adlogin')
        dispatch(getCompReq())
    }, [isAuthenticated, dispatch, navigate])

    useEffect(() => {
        accComReqMs ? alert.success(accComReqMs.message) : null
        rejComReqMs ? alert.success(rejComReqMs.message) : null
    }, [accComReqMs, rejComReqMs, alert])

    const accept = (id) => {
        dispatch(accCompReq(id))
       
    }
    const reject = (id) => {
        dispatch(rejCompReq(id))
    
    }
    return (
        <div className='app'>
            <AdminSidebar />
            <main className='content'>
                <AdminTopbar />
                <Box m="15px">
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Header title="Complaints" subtitle="Welcome Your Complaints Details Page" />
                        {/* <EmpModel /> */}

                    </Box>
                    <Box display="felx" justifyContent="space-between" alignItems="center">

                    </Box>
                    <TextField sx={{ width: "80%" }}
                        id=""
                        label=""
                        variant='standard'
                        placeholder='Search by Name And Conplaint Type'

                    />
                    <Button variant="text" color="default">
                        Reload
                    </Button>
                    {
                        loading ? <Loader /> :
                            <Box alignItems="center" justifyContent="center" m="15px"
                            sx={{
                                "& .MuiTable-root": {
                                    border: "none"
                                },
                                "& .MuiTableCell-root": {
                                    borderBottom: "none"
                                },
                                "& .name-column--cell": {
                                    color: colors.greenAccent[300]
                                },
                                "& .MuiTableHead-root": {
                                    backgroundColor: colors.blueAccent[400],
                                    borderBottom: "none"
                                }
                            }}
                            >
                                <Typography variant="h3" color={colors.redAccent[600]}>Complaint Details</Typography>
                                <TableContainer sx={{ mt: "10px", minWidth: 200 , height:"400px", overflow:"auto",  backgroundColor: colors.primary[600]}} component={Paper}>
                                    <Table size='small' >
                                        <TableHead  >
                                            <TableRow >
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
                                        <TableBody sx={{ backgroundColor: colors.primary[600]}}>

                                            {getComReq <= 0 ? <TableRow>
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
                                                    <TableCell >
                                                        <IconButton aria-label="block" color='success' onClick={() => { accept(data._id) }}>
                                                            <TaskTwoTone  color='success'/>
                                                        </IconButton>
                                                        <IconButton aria-label="block" color='error' onClick={() => { reject(data._id) }}>
                                                            <DangerousTwoTone color='error' />
                                                        </IconButton>
                                                       
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