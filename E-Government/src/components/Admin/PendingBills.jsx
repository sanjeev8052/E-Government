import React, { useEffect } from 'react'
import AdminSidebar from '../Global/AdminSidebar'
import AdminTopbar from '../Global/AdminTopbar'
import { tokens } from '../../Global'
import Loader from './AdminLoader'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../Global/Header'
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme, Paper, IconButton, TextField } from '@mui/material'
import { GetPendingBill } from '../../Action/Admin/Bills'

const PendingBills = () => {
    const themes = useTheme()
    const colors = tokens(themes.palette.mode)

    const { getpenbill , loading } = useSelector((state) => (state.services))
    const dispatch = useDispatch()
    useEffect(() => {
        // dispatch(Getbillcat())
        dispatch(GetPendingBill())
    }, [])
    console.log(getpenbill)
    return (
        <div className='app'>
            <AdminSidebar />
            <main className='content'>
                <AdminTopbar />
                <Box m="15px">
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Header title="Pending Bills" subtitle="Welcome To Pending Bills Details Page" />
                    </Box>
                    <Box display="felx" justifyContent="space-between" alignItems="center">

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
                            <Typography variant="h3" color={colors.redAccent[600]}>Pending Bill Details</Typography>
                            <TableContainer sx={{ mt: "10px", minWidth: 200 ,  height:"400px", overflow:"auto",  backgroundColor: colors.primary[600]}} component={Paper}>
                                <Table size='small' >
                                    <TableHead  >
                                        <TableRow>
                                            <TableCell>Bill Type</TableCell>
                                            <TableCell>Owner Name</TableCell>
                                            <TableCell>Tenament No.</TableCell>
                                            <TableCell>Street Address</TableCell>
                                            <TableCell>Area</TableCell>
                                            <TableCell>Past Due Amount </TableCell>
                                            <TableCell>Amount</TableCell>
                                            <TableCell>Totel</TableCell>
                                            <TableCell>Bill Date</TableCell>
                                            <TableCell>Last Due Date</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody sx={{ backgroundColor: colors.primary[600]}}>

                                        { getpenbill &&
                                            getpenbill <= 0 ? <TableRow>
                                                <TableCell colSpan={6}>
                                                    <Typography className='text-center' sx={{ margin: "10px auto", display:"block" }} variant="h2" color="primary">No Bill Pending Data</Typography>
                                                </TableCell>
                                            </TableRow> : getpenbill?.map((data) => (
                                                <TableRow key={data._id}>
                                                    <TableCell >{data.billType}</TableCell>
                                                    <TableCell >{data.ownerName}</TableCell>
                                                    <TableCell >{data.tenamentNo}</TableCell>
                                                    <TableCell >{data.streetAddress}</TableCell>
                                                    <TableCell >{data.area}</TableCell>
                                                    <TableCell >{data.pastDueAmt}</TableCell>
                                                    <TableCell >{data.amount}</TableCell>
                                                    <TableCell >{data.totelAmt}</TableCell>
                                                    <TableCell >{data.addDate}</TableCell>
                                                    <TableCell >{data.lastDueDate}</TableCell>
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

export default PendingBills