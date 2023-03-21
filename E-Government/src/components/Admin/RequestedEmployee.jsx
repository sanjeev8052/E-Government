import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme, Paper, IconButton } from '@mui/material'
import React, { useEffect } from 'react'
import AdminSidebar from '../Global/AdminSidebar'
import AdminTopbar from '../Global/AdminTopbar'
import Pdf from '../Global/Pdf'

import Header from '../Global/Header'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Layout/Loader'
import { tokens } from '../../Global'
import { getTempEmp, conTempEmp, rejTempEmp } from '../../Action/Admin/Employee'
import { useNavigate } from 'react-router-dom'
import { CancelTwoTone, CheckCircleOutlineTwoTone, Height, PictureAsPdfRounded } from '@mui/icons-material'

const RequestedEmployee = () => {
    const themes = useTheme()
    const colors = tokens(themes.palette.mode)
    const { isAuthenticated, loading, empReq } = useSelector((state) => (state.admin))

    const dispatch = useDispatch()
    const navigate = useNavigate();
    useEffect(() => {
        isAuthenticated ? navigate('/aremployee') : navigate('/adlogin')
        dispatch(getTempEmp())
    }, [isAuthenticated, dispatch, navigate])

    const reject = (id) => {
        dispatch(rejTempEmp(id))
    }
    const confirm = (id) => {
        dispatch(conTempEmp(id));

    }

    return (
        <div className='app'>
            <AdminSidebar />
            <main className='content'>
                <AdminTopbar />

                <Box m="15px">
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Header title="Requested Employees" subtitle="Welcome Your Requested Employees Details Page" />
                        <Pdf contentId="bid" downloadFileName="req"  />

                    </Box>
                    {loading ? <Loader /> :
                        <Box alignItems="center"  id="bid" justifyContent="center" m="15px" sx={{
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
                        }} >
                            <Typography variant="h3" color={colors.redAccent[600]}>Requested Employees Details</Typography>
                            <TableContainer sx={{ mt: "10px", height: "400px", overflow: "auto", backgroundColor: colors.primary[600] }} component={Paper} >
                                <Table size='small' sx={{ backgroundColor: colors.blueAccent[400] }}>
                                    <TableHead  >
                                        <TableRow >
                                            <TableCell>Name</TableCell>
                                            <TableCell>Email</TableCell>
                                            <TableCell>Gender</TableCell>
                                            <TableCell>Phone NO.</TableCell>
                                            <TableCell>Department</TableCell>
                                            <TableCell>Actions</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody sx={{ backgroundColor: colors.primary[600] }}>

                                        {empReq <= 0 ? <TableRow>
                                            <TableCell colSpan={6}>
                                                <Typography sx={{ margin: "10px auto", width: "10rem" }} variant="h2" color="primary">No Requested Employee Data</Typography>
                                            </TableCell>
                                        </TableRow>
                                            :
                                            empReq?.map((data) => (
                                                <TableRow key={data._id}>
                                                    <TableCell >{data.name}</TableCell>
                                                    <TableCell >{data.email}</TableCell>
                                                    <TableCell >{data.gender}</TableCell>
                                                    <TableCell >{data.phone}</TableCell>
                                                    <TableCell >{data.dept}</TableCell>
                                                    <TableCell >
                                                        <IconButton aria-label="correct" color='success' onClick={() => { confirm(data._id) }}>
                                                            <CheckCircleOutlineTwoTone />
                                                        </IconButton>
                                                        <IconButton aria-label="reject" color='error' onClick={() => { reject(data._id) }}>
                                                            <CancelTwoTone />
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

export default RequestedEmployee