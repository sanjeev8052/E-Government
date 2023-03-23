import { makeStyles } from '@material-ui/core'
import { Box, Typography } from '@mui/material'
import React, { Fragment } from 'react'
// import "./../../index1.css"
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import AdminSidebar from '../Global/AdminSidebar'
import AdminTopbar from '../Global/AdminTopbar'
import Header from '../Global/Header'
import Loader from '../Layout/Loader'
import AdminAuth from '../ProtectedRoute/AdminAuth'



const Dashboard = () => {


  
  return (
    <Fragment>{loading ? <Loader /> :
      <div className='app'>
        <AdminSidebar />
        <main className='content'>
          <AdminTopbar />
          <Box m="15px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Header title="DASHBOARD" subtitle="Welcome to Yuor Dashboard" />
            </Box>
            <Box>
              <Typography variant="h1" color="initial">hello</Typography>
            </Box>
          </Box>
        </main>
      </div>
    }</Fragment>
  )
}

export default AdminAuth(Dashboard)