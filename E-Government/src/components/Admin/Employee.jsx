import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme, Paper,  IconButton } from '@mui/material'
import React, { useEffect } from 'react'
import AdminSidebar from '../Global/AdminSidebar'
import AdminTopbar from '../Global/AdminTopbar'
import Header from '../Global/Header'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Layout/Loader'
import { tokens } from '../../Global'
import { blockEmp, getEmp } from '../../Action/Admin/Employee'
import { Block } from '@mui/icons-material'
import { useNavigate } from 'react-router'

const Employee = () => {
    const themes = useTheme()
    const colors = tokens(themes.palette.mode)
    const { isAuthenticated, loading, emp } = useSelector((state) => (state.admin))
    // const {  data } = useSelector((state) => (state.admin.data))
    //    console.log(data)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        //isAuthenticated ? navigate('/aemployee') : navigate('/adlogin')
        dispatch(getEmp())
    }, [isAuthenticated, dispatch ,navigate])

    const block = (id) => {
        dispatch(blockEmp(id));
        window.location.reload();
    }
    return (



        <div className='app'>
            <AdminSidebar />
            <main className='content'>
                <AdminTopbar />

                          
                            <Box m="15px">
                            <Box display="flex" justifyContent="space-between" alignItems="center">
                                <Header title="Employee" subtitle="Welcome Your Employee Details Page" />
                                {/* <EmpModel /> */}

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
                                                <TableCell>Gender</TableCell>
                                                <TableCell>Phone NO.</TableCell>
                                                <TableCell>Actions</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                           
                                            {
                                        emp?.map((data) => (
                                            <TableRow key={data._id}>
                                                <TableCell >{data.name}</TableCell>
                                                <TableCell >{data.email}</TableCell>
                                                <TableCell >{data.gender}</TableCell>
                                                <TableCell >{data.phone}</TableCell>
                                                <TableCell >
                                                    <IconButton aria-label="block" color='error' onClick={() => { block(data._id) }}>
                                                        <Block/>
                                                      
                                                    </IconButton>
                                                    {/* <Button variant="contained" color="primary" size='small' sx={{borderRadius:"100px"}} onClick={() => { block(data._id) }}><BlockTwoTone/> Block
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

export default Employee