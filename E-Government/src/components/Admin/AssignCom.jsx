
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme, Paper, IconButton, TextField, } from '@mui/material'
import React, { useEffect } from 'react'
import AdminSidebar from '../Global/AdminSidebar'
import AdminTopbar from '../Global/AdminTopbar'


import { useDispatch, useSelector } from 'react-redux'
import Loader from './AdminLoader'
import { tokens } from '../../Global'
import { DangerousTwoTone, TaskTwoTone } from '@mui/icons-material'
import { useNavigate } from 'react-router'
import { getAccCom, loadCom, } from '../../Action/Services/Services'


import Header from '../Global/Header'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import AdminAuth from '../ProtectedRoute/AdminAuth'
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

    const asign = (id) => {
        dispatch(loadCom(id))
        navigate('/assigncom')
    }

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
                                <TableContainer sx={{
                                    mt: "10px",
                                    height: "400px", overflow: "auto", backgroundColor: colors.primary[600]
                                }} component={Paper}>
                                    <Table size='small' >
                                        <TableHead  >
                                            <TableRow sx={{ backgroundColor: colors.greenAccent[800] }}>
                                                <TableCell>City</TableCell>
                                                <TableCell>StreetAddress</TableCell>
                                                <TableCell>Area</TableCell>
                                                <TableCell>Pincode</TableCell>
                                                <TableCell>Complaint Type</TableCell>
                                                <TableCell>Complaint Description</TableCell>
                                                <TableCell>Actions</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody sx={{ backgroundColor: colors.primary[600]}}>

                                            {getAccReq <= 0 ? <TableRow>
                                                <TableCell colSpan={6}>
                                                    <Typography sx={{ margin: "10px auto", width: "10rem" }} variant="h2" color="primary">No Complaint Data</Typography>
                                                </TableCell>
                                            </TableRow> : getAccReq?.map((data) => (
                                                <TableRow key={data._id}>
                                                    <TableCell >{data.city}</TableCell>
                                                    <TableCell >{data.streetAddress}</TableCell>
                                                    <TableCell >{data.area}</TableCell>
                                                    <TableCell >{data.complaintType}</TableCell>
                                                    <TableCell >{data.pincode}</TableCell>
                                                    <TableCell component='th' scope='row'>{data.complaintDesc}</TableCell>
                                                    <TableCell >
                                                        {/* <Button variant="text" color="default" onClick={() => { asign(data._id) }} >
                                                          send
                                                        </Button> */}
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

export default  AdminAuth(AssignCom)