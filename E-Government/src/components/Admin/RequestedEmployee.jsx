import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme, Paper,  IconButton } from '@mui/material'
import React, { useEffect } from 'react'
import AdminSidebar from '../Global/AdminSidebar'
import AdminTopbar from '../Global/AdminTopbar'
import Header from '../Global/Header'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Layout/Loader'
import { tokens } from '../../Global'
import { getTempEmp, conTempEmp } from '../../Action/Admin/Employee'
import { useNavigate } from 'react-router-dom'
import { CheckCircleOutlineTwoTone } from '@mui/icons-material'

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
    const confirm = (id) => {
        dispatch(conTempEmp(id));
        window.location.reload();
    }

    return (
        <div className='app'>
            <AdminSidebar />
            <main className='content'>
                <AdminTopbar />

                <Box m="15px">
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Header title="Requested Employees" subtitle="Welcome Your Requested Employees Details Page" />


                    </Box>
                    {loading ? <Loader /> :
                        <Box alignItems="center" justifyContent="center" m="15px" >
                            <Typography variant="h3" color={colors.redAccent[600]}>Requested Employees Details</Typography>
                            <TableContainer sx={{ mt: "10px" , maxWidth:1000 }} component={Paper}>
                                <Table size='small' >
                                    <TableHead  >
                                        <TableRow sx={{ backgroundColor: colors.greenAccent[800] }}>
                                            <TableCell>Name</TableCell>
                                            <TableCell>Email</TableCell>
                                            <TableCell>Gender</TableCell>
                                            <TableCell>Phone NO.</TableCell>
                                            <TableCell>Actions</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>

                                        {empReq <= 0 ? <TableRow>
                                            <TableCell colSpan={6}>
                                                <Typography sx={{ margin: "10px auto", width: "10rem" }} variant="h2" color="primary">No Requested Emploee Data</Typography>
                                            </TableCell>
                                        </TableRow>
                                            :
                                            empReq?.map((data) => (
                                                <TableRow key={data._id}>
                                                    <TableCell >{data.name}</TableCell>
                                                    <TableCell >{data.email}</TableCell>
                                                    <TableCell >{data.gender}</TableCell>
                                                    <TableCell >{data.phone}</TableCell>
                                                    <TableCell >
                                                        <IconButton aria-label="correct" onClick={() => { confirm(data._id) }}>
                                                          <CheckCircleOutlineTwoTone/>
                                                        </IconButton>
                                                        {/* <Button variant="contained" color="success" onClick={() => { confirm(data._id) }} sx={{borderRadius:"100px"}}>
                                                            <CheckCircleOutlineTwoTone/>
                                                        </Button> */}
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