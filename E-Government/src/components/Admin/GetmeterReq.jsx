import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme, Paper, IconButton, Button } from '@mui/material'
import React, { useEffect } from 'react'
import AdminSidebar from '../Global/AdminSidebar'
import AdminTopbar from '../Global/AdminTopbar'
import Header from '../Global/Header'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Layout/Loader'
import { tokens } from '../../Global'
import { useNavigate } from 'react-router-dom'
import { CancelTwoTone, CheckCircleOutlineTwoTone, Height } from '@mui/icons-material'
import { getMeterApplyReq } from '../../Action/Services/Services'

const GetmeterReq = () => {
    const redirect = "http://locahost:5000/PDF/"
    const themes = useTheme()
    const colors = tokens(themes.palette.mode)
    const { loading, getMeterReq } = useSelector((state) => (state.services))

    const dispatch = useDispatch()
    const navigate = useNavigate();
    useEffect(() => {
        // isAuthenticated ? navigate('/aremployee') : navigate('/adlogin')
        dispatch(getMeterApplyReq())
    }, [dispatch])

    
    // const confirm = (id) => {
    //     dispatch(conTempEmp(id));

    // }

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
                                            <TableCell colSpan={6}>
                                                <Typography sx={{ margin: "10px auto", width: "10rem" }} variant="h2" color="primary">No Meter Apply Request</Typography>
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
                                                        <a href={`http://localhost:5000/PDF/${data.proof}`} style={{textDecoration:"none" , color:"white"}} target="_blank" rel="noopener noreferrer">View</a>
                                                            
                                                        </Button>

                                                        {/* {data.proof} */}
                                                    </TableCell>
                                                    <TableCell >
                                                        <IconButton aria-label="correct" color='success'  >
                                                            <CheckCircleOutlineTwoTone />
                                                        </IconButton>
                                                        <IconButton aria-label="reject" color='error' >
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

export default GetmeterReq