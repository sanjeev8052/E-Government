
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme, Paper, Button} from '@mui/material'
import React, { useEffect } from 'react'
import AdminSidebar from '../Global/AdminSidebar'
import AdminTopbar from '../Global/AdminTopbar'
import EmpModel from '../Global/EmpModel'
import Header from '../Global/Header'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Layout/Loader'
import { tokens } from '../../Global'
import { blockEmp, getEmp } from '../../Action/Admin/Employee'
import { BlockTwoTone } from '@mui/icons-material'

const Employee = () => {
    const themes = useTheme()
    const colors = tokens(themes.palette.mode)
    const { isAuthenticated, loading, emp } = useSelector((state) => (state.admin))
    // const {  data } = useSelector((state) => (state.admin.data))
    //    console.log(data)

    const dispatch = useDispatch()

    useEffect(() => {
        // isAuthenticated ? navigate('/aemployee') : navigate('/adlogin')
        dispatch(getEmp())
    }, [isAuthenticated, dispatch])

const block = (id) => { 
    dispatch(blockEmp(id))
    dispatch(getEmp())
 }
    return (
       
         
               
                    <div className='app'>
                        <AdminSidebar />
                        <main className='content'>
                            <AdminTopbar />

                          
                         
                           
                <Box m="15px">
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Header title="Employee" subtitle="Welcome Your Employee Details Page" />
                        <EmpModel/>
                    </Box>

                        {loading ? <Loader/>:
                         <Box alignItems="center" justifyContent="center" m="15px" >
                         <Typography variant="h3" color={colors.redAccent[600]}>Employees Details</Typography>
                         <TableContainer sx={{ mt: "10px" }} component={Paper}>
                             <Table size='small' >
                                 <TableHead  >
                                     <TableRow sx={{ backgroundColor: colors.grey[700] }}>
                                         <TableCell>Name</TableCell>
                                         <TableCell>Email</TableCell>
                                         <TableCell>Gender</TableCell>
                                         <TableCell>Phone NO.</TableCell>
                                         <TableCell>Oprations</TableCell>
                                     </TableRow>
                                 </TableHead>
                                 <TableBody sx={{backgroundColor:colors.blueAccent[800]}}>
                                     {
                                    //       emp?.((data) => (
                                    //          <TableRow key={data._id}>
                                    //              <TableCell >{data.name}</TableCell>
                                    //              <TableCell >{data.email}</TableCell>
                                    //              <TableCell >{data.gender}</TableCell>
                                    //              <TableCell >{data.phone}</TableCell>
                                    //              <TableCell >
                                    //                  {/* <IconButton aria-label="block" color='error'>
                                    //                      <BlockTwoTone/>
                                                       
                                    //                  </IconButton> */}
                                    //                  <Button variant="contained" color="primary" size='small' sx={{borderRadius:"100px"}} onClick={() => { block(data._id) }}><BlockTwoTone/> Block
                                    //                  </Button>
                                    //              </TableCell>
                                    //          </TableRow>
                                    //      ))
                                    }
                                         </TableBody>
                                     </Table>
                                 </TableContainer>
                             </Box>}
                           
                        </Box>
                        </main>
                    </div>
    )
}

export default Employee