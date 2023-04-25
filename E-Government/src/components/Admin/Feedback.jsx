
import { Paper, TableBody } from '@material-ui/core'
import { Box, useTheme, Card, CardContent, Typography, Table, TableHead, TableRow, TableCell, TableContainer } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Getfeedback } from '../../Action/User'
import { tokens } from '../../Global'
import AdminSidebar from '../Global/AdminSidebar'
import AdminTopbar from '../Global/AdminTopbar'

import Header from '../Global/Header'
import AdminAuth from '../ProtectedRoute/AdminAuth'
const Feedback = () => {
    const { getfeedback } = useSelector((state) => (state.user))
    const themes = useTheme()
    const colors = tokens(themes.palette.mode)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(Getfeedback())
    }, [])

    return (
        <div className='app'>
            <AdminSidebar />
            <main className='content'>
                <AdminTopbar />
                <Box m="15px">
                    <Box justifyContent="space-between" alignItems="center" display='flex'>
                        <Header title="Feedback" subtitle="Welcome to Feedback Page" />
                    </Box>
                    
                            
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
                                <TableContainer  component={Paper} sx={{mt: "10px",
                                    height:"400px", overflow:"auto",  backgroundColor: colors.primary[600]
                                }}>
                                    <Table size='small' >
                                        <TableHead  >
                                            <TableRow >
                                                 <TableCell  sx={{  fontSize: "1.0rem", fontWeight:"bold" ,textTransform: 'capitalize' }}>Name</TableCell>
                                                 <TableCell  sx={{  fontSize: "1.0rem", fontWeight:"bold" ,textTransform: 'capitalize' }}>Feedback</TableCell>
                                                
                                            </TableRow>
                                        </TableHead>
                                        <TableBody sx={{ backgroundColor: colors.primary[600]}}>
                                           
                                            <TableRow>
                                                 <TableCell  sx={{  fontSize: "1.0rem", fontWeight:"bold" ,textTransform: 'capitalize' }}>sujeet</TableCell>
                                                 <TableCell  sx={{  fontSize: "1.0rem", fontWeight:"bold" ,textTransform: 'capitalize' }}>anything</TableCell>
                                                
                                            </TableRow>
                                         
                                    
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                           
                </Box>
            </main>
        </div>
    )
}

export default  AdminAuth(Feedback)