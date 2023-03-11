
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme, Paper, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AdminSidebar from '../Global/AdminSidebar'
import AdminTopbar from '../Global/AdminTopbar'
import Header from '../Global/Header'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Layout/Loader'
import { tokens } from '../../Global'
import { blockEmp, getEmp } from '../../Action/Admin/Employee'
import { Block } from '@mui/icons-material'
import { useNavigate } from 'react-router'
import BlockEmployee from '../Global/BlockEmployee'

const Employee = () => {
    const themes = useTheme()
    const colors = tokens(themes.palette.mode)
    const { isAuthenticated, loading, emp, blockData } = useSelector((state) => (state.admin))

    console.log(emp)
    console.log(blockData)


    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getEmp())


    }, [])



    const block = (id) => {
        dispatch(blockEmp(id));


    }




    return (
        <div className='app'>
            <AdminSidebar />
            <main className='content'>
                {/* <AdminTopbar />
                <Box m="15px">
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Header title="Employee" subtitle="Welcome Your Employee Details Page" />
                        {/* <EmpModel /> */}
                <BlockEmployee />


                <Box m="15px">
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Header title="Employee" subtitle="Welcome Your Employee Details Page" />
                        {/* <EmpModel /> */}

                    </Box>

                    <Box alignItems="center" justifyContent="center" m="15px" />


                    <Box alignItems="center" justifyContent="center" m="15px">
                        <Typography variant="h3" color={colors.redAccent[600]}>Employees Details</Typography>
                        <TableContainer sx={{ mt: "10px", maxWidth: "md" }} component={Paper}  >
                            {loading ? <Loader /> :
                                <Table size='small'  >
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


                                        {emp?.map((data) => (
                                            <TableRow key={data._id}>
                                                <TableCell >{data.name}</TableCell>
                                                <TableCell >{data.email}</TableCell>
                                                <TableCell >{data.gender}</TableCell>
                                                <TableCell >{data.phone}</TableCell>
                                                <TableCell >
                                                    <IconButton aria-label="block" color='error' onClick={() => { block(data._id) }}>
                                                        <Block />

                                                    </IconButton>

                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            }
                        </TableContainer>
                    </Box>
                    <Box />
                </Box>
            </main>
        </div>
    )
}

export default Employee