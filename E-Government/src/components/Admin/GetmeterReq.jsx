import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme, Paper, IconButton, Button } from '@mui/material'
import React, { useEffect } from 'react'
import AdminSidebar from '../Global/AdminSidebar'
import AdminTopbar from '../Global/AdminTopbar'
import Header from '../Global/Header'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './AdminLoader'
import { tokens } from '../../Global'
import { useAlert } from 'react-alert'
import { useNavigate } from 'react-router-dom'
import { CancelTwoTone, CheckCircleOutlineTwoTone, Height } from '@mui/icons-material'
import { getMeterApplyReq, rejMeterReq, accMeterReq } from '../../Action/Services/Meter'
import AdminAuth from '../ProtectedRoute/AdminAuth'

const GetmeterReq = () => {
    const themes = useTheme()
    const colors = tokens(themes.palette.mode)
    const { loading, getMeterReq, accMeterReqMs, error, rejectMeterReqMs } = useSelector((state) => (state.services))
    const alert = useAlert();
    const dispatch = useDispatch()
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getMeterApplyReq())
    }, [dispatch])

    useEffect(() => {
        accMeterReqMs ? alert.success(accMeterReqMs.message) : null
        rejectMeterReqMs ? alert.success(rejectMeterReqMs.message) : null
    }, [accMeterReqMs, rejectMeterReqMs, alert])


    const confirm = (id) => {
        dispatch(accMeterReq(id));
    }
    const reject = (id) => {
        dispatch(rejMeterReq(id));
    }

    return (
        <div className='app'>
            <AdminSidebar />
            <main className='content'>
                <AdminTopbar />

                <Box m="15px">
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Header title="Meter Request" subtitle="Welcome Your Meter Request Details Page" />


                    </Box>
                    {loading ? <Loader /> :
                        <Box alignItems="center" justifyContent="center" m="15px" sx={{
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

                            <TableContainer sx={{ mt: "10px", height: "400px", overflow: "auto", backgroundColor: colors.primary[600] }} component={Paper} >
                                <Table size='small' sx={{ backgroundColor: colors.blueAccent[400] }}>
                                    <TableHead  >
                                        <TableRow >
                                            <TableCell>Name</TableCell>
                                            <TableCell>Email</TableCell>
                                            <TableCell>Phone NO.</TableCell>
                                            <TableCell>MeterType</TableCell>
                                            <TableCell>Tenament NO.</TableCell>
                                            <TableCell>City</TableCell>
                                            <TableCell>Area</TableCell>
                                            <TableCell>Proof</TableCell>
                                            <TableCell>Actions</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody sx={{ backgroundColor: colors.primary[600] }}>

                                        {getMeterReq <= 0 ? <TableRow>
                                            <TableCell colSpan={9}>
                                                <Typography sx={{ margin: "10px auto", width: "10rem" }} variant="h1" color="primary">No Meter Apply Request</Typography>
                                            </TableCell>
                                        </TableRow>
                                            :
                                            getMeterReq?.map((data) => (
                                                <TableRow key={data._id}>
                                                    <TableCell >{data.name}</TableCell>
                                                    <TableCell >{data.email}</TableCell>
                                                    <TableCell >{data.phone}</TableCell>
                                                    <TableCell >{data.meterType}</TableCell>
                                                    <TableCell >{data.tenamentNo}</TableCell>
                                                    <TableCell >{data.city}</TableCell>
                                                    <TableCell >{data.area}</TableCell>
                                                    <TableCell >
                                                        <Button variant="contained" color="primary"   >
                                                            <a href={`http://localhost:5000/PDF/${data.proof}`} style={{ textDecoration: "none", color: "white" }} target="_blank" rel="noopener noreferrer">View</a>

                                                        </Button>
                                                    </TableCell>
                                                    <TableCell >
                                                        <IconButton aria-label="correct" color='success' onClick={() => { confirm(data._id) }}  >
                                                            <CheckCircleOutlineTwoTone />
                                                        </IconButton>
                                                        <IconButton aria-label="reject" color='error' onClick={() => { reject(data._id) }} >
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

export default  AdminAuth(GetmeterReq)