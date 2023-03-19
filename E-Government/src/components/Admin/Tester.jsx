import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { getTempEmp, conTempEmp, rejTempEmp } from '../../Action/Admin/Employee'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Loader from '../Layout/Loader'
import { useMemo } from 'react';


const Tester = () => {
   
    const [requestEmp, setRequestEmp] = useState([])
    const dispatch = useDispatch()
    const { empReq, loading } = useSelector((state) => (state.admin))
    useEffect(  () => {
       dispatch(getTempEmp())
        // loaddetails()
        //  empReq?setRequestEmp(empReq): null   
          
    }, [])
    // const loaddetails = async () => {
    //     const response = await axios.get(`/api/admin/gettempemp`)
    //     setRequestEmp(response.data)
    //   }
    const columns= useMemo(() => [
        { field: 'id', headerName: 'ID', width: 70 ,flex:1},
        { field: 'dept', headerName: 'Dept', width: 110, flex:1},
        { field: 'gender', headerName: 'Gender', width: 110, flex:1},
        { field: 'name', headerName: 'Name', width: 110, flex:1},
    ],[])
     console.log(empReq)
    // console.log(requestEmp)
   

    return (
        <Box>
             <DataGrid rows={empReq} columns={columns}  pageSize={12} getRowId={row => row._id}   rowsPerPageOptions={[10, 25, 50]}  checkboxSelection
  disableSelectionOnClick />
        </Box>
    )
}

export default Tester