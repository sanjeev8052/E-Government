import { makeStyles } from '@material-ui/core'
import { Box, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import "./../../index1.css"
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import AdminSidebar from '../Global/AdminSidebar'
import AdminTopbar from '../Global/AdminTopbar'
import Header from '../Global/Header'
import Loader from '../Layout/Loader'



const Dashboard = () => {

  const { isAuthenticated, admin, loading } = useSelector((state) => (state.admin))
  const navigate = useNavigate()
<<<<<<< HEAD

  useEffect(() => {
    isAuthenticated ? navigate('/dashboard') : navigate('/adlogin')
  }, [loading])
=======
 
  // useEffect(() => {
  //   isAuthenticated ? navigate('/dashboard') : navigate('/adlogin')
  // }, [isAuthenticated, navigate])
>>>>>>> 98b276590d8e71c4fb72900754c7e62d1f13e7a9

  //  isAuthenticated ? navigate("/dashboard") : navigate('/adlogin')
  return (
    <Fragment>{loading ? <Loader /> :
      <div className='app'>
        <AdminSidebar admin={admin && admin.name} />
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

export default Dashboard