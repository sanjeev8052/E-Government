import { makeStyles } from '@material-ui/core'
import { Box, Typography } from '@mui/material'
import React, { Fragment } from 'react'
// import "./../../index1.css"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import AdminSidebar from '../Global/AdminSidebar'
import AdminTopbar from '../Global/AdminTopbar'
import Header from '../Global/Header'
import Loader from '../Layout/Loader'
import AdminAuth from '../ProtectedRoute/AdminAuth'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { CountUser } from '../../Action/Admin/Dashboard'
import { Person, Person4, Person4TwoTone } from '@mui/icons-material'


const Dashboard = () => {
  const dispatch = useDispatch();
  const { cuser } = useSelector((state) => (state.dashboard))
  useEffect(() => {
    dispatch(CountUser())
  }, [])

  const { loading } = useSelector(state => state.admin)

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
              <div className='row m-3 mb-3'>
                <div className="col-sm-3 mb-3">
                  <div className="card" style={{ width: "20rem", padding:"10px"}}>
                    <h1>User</h1>
                    <div style={{ display: "flex", alignItems:"center" , justifyContent:"space-between", padding:"0px"}}>
                      <Box>
                        <Person4  sx={{height:"120px" , width:"120px"}} />
                      </Box>
                      <Box sx={{ mr: "80px"  }}>

                        <Typography variant="h1" color="initial" fontSize="120px" >{cuser}</Typography>
                      </Box>
                    </div>

                  </div>

                </div>
                <div className="col-sm-4">
                  <div className="card" style={{ width: "20rem", padding:"10px"}}>
                    <h1>User</h1>
                    <div style={{ display: "flex", alignItems:"center" , justifyContent:"space-between", padding:"0px"}}>
                      <Box>
                        <Person4  sx={{height:"120px" , width:"120px"}} />
                      </Box>
                      <Box sx={{ mr: "80px"  }}>

                        <Typography variant="h1" color="initial" fontSize="120px" >{cuser}</Typography>
                      </Box>
                    </div>

                  </div>

                </div>
                <div className="col-sm-4">
                  <div className="card" style={{ width: "20rem", padding:"10px"}}>
                    <h1>User</h1>
                    <div style={{ display: "flex", alignItems:"center" , justifyContent:"space-between", padding:"0px"}}>
                      <Box>
                        <Person4  sx={{height:"120px" , width:"120px"}} />
                      </Box>
                      <Box sx={{ mr: "80px"  }}>

                        <Typography variant="h1" color="initial" fontSize="120px" >{cuser}</Typography>
                      </Box>
                    </div>

                  </div>

                </div>
                <div className="col-sm-4">
                  <div className="card" style={{ width: "20rem", padding:"10px"}}>
                    <h1>User</h1>
                    <div style={{ display: "flex", alignItems:"center" , justifyContent:"space-between", padding:"0px"}}>
                      <Box>
                        <Person4  sx={{height:"120px" , width:"120px"}} />
                      </Box>
                      <Box sx={{ mr: "80px"  }}>

                        <Typography variant="h1" color="initial" fontSize="120px" >{cuser}</Typography>
                      </Box>
                    </div>

                  </div>

                </div>
                <div className="col-sm-4">
                  <div className="card" style={{ width: "20rem", padding:"10px"}}>
                    <h1>User</h1>
                    <div style={{ display: "flex", alignItems:"center" , justifyContent:"space-between", padding:"0px"}}>
                      <Box>
                        <Person4  sx={{height:"120px" , width:"120px"}} />
                      </Box>
                      <Box sx={{ mr: "80px"  }}>

                        <Typography variant="h1" color="initial" fontSize="120px" >{cuser}</Typography>
                      </Box>
                    </div>

                  </div>

                </div>
              </div>
            </Box>
          </Box>
        </main>
      </div>
    }</Fragment>
  )
}

export default AdminAuth(Dashboard)