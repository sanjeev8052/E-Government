import { makeStyles } from '@material-ui/core'
import { Box, Typography } from '@mui/material'
import React, { Fragment } from 'react'
// import "./../../index1.css"
import './Dashboard.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import AdminSidebar from '../Global/AdminSidebar'
import AdminTopbar from '../Global/AdminTopbar'
import Header from '../Global/Header'
import Loader from '../Layout/Loader'
import AdminAuth from '../ProtectedRoute/AdminAuth'
import { Person } from '@mui/icons-material'
import { PieChart } from 'react-minimal-pie-chart';



const Dashboard = () => {
  const dispatch = useDispatch();
  const { cuser } = useSelector((state) => (state.dashboard))
  useEffect(() => {
    dispatch(CountUser())
  }, [])

  const { loading } = useSelector(state => state.admin)


  const { loading } = useSelector(state => state.admin)
  const label = "Complaints"

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
            <div className="row dashboard ">
              <div className="col-2 dsItem1">

                <Typography variant="h2" color="lightblue">User</Typography>
                <Typography variant="h1" color="lightblue">12</Typography>

              </div>
              <div className="col-2 dsItem1">

                <Typography variant="h2" color="lightblue">Employee</Typography>
                <Typography variant="h1" color="lightblue">12</Typography>

              </div>
              <div className="col-2 dsItem1">
                <Typography variant="h2" color="lightblue">Complaints</Typography>
                <Typography variant="h1" color="lightblue">12</Typography>

              </div>
              <div className="col-2 dsItem1">
                <Typography variant="h2" color="lightblue">Meter Req</Typography>
                <Typography variant="h1" color="lightblue">12 </Typography>

              </div>
              <div className="col-2 dsItem1">
                <Typography variant="h2" color="lightblue">certificates</Typography>
                <Typography variant="h1" color="lightblue">12</Typography>

              </div>
              <div className='row pieChartBox'>

              <div className="col-sm-4  ">
                  <Typography variant="h1" color="initial">Complaints</Typography>
                  <div className='chart'>
                    <Typography variant="h3" color="initial">Request  </Typography><div className='bg-secondary' id='c1'></div><br />
                  </div>
                  <div className='chart'>
                    <Typography variant="h3" color="initial">Process  </Typography><div className='bg-warning' id='c1'></div><br />
                  </div>
                  <div className='chart'>
                    <Typography variant="h3" color="initial">Complete  </Typography><div className='bg-success' id='c1'></div><br />
                  </div>

                  <PieChart className='pieChart'

                    data={[
                      { title: 'Two', value: 10, color: 'orange' },
                      { title: 'One', value: 15, color: 'gray', label: "Request" },
                      { title: 'Three', value: 10, color: 'green' },
                    ]}
                  />;
                </div>
                <div className="col-sm-4  ">
                  <Typography variant="h1" color="initial">Meter</Typography>
                  <div className='chart'>
                    <Typography variant="h3" color="initial">Request  </Typography><div className='bg-secondary' id='c1'></div><br />
                  </div>
                  <div className='chart'>
                    <Typography variant="h3" color="initial">Process  </Typography><div className='bg-warning' id='c1'></div><br />
                  </div>
                  <div className='chart'>
                    <Typography variant="h3" color="initial">Complete  </Typography><div className='bg-success' id='c1'></div><br />
                  </div>

                  <PieChart className='pieChart'

                    data={[
                      { title: 'Two', value: 10, color: 'orange' },
                      { title: 'One', value: 15, color: 'gray', label: "Request" },
                      { title: 'Three', value: 10, color: 'green' },
                    ]}
                  />;
                </div>
                <div className="col-sm-4  ">
                  <Typography variant="h1" color="initial">Certificate</Typography>
                  <div className='chart'>
                    <Typography variant="h3" color="initial">Request  </Typography><div className='bg-secondary' id='c1'></div><br />
                  </div>
                  <div className='chart'>
                    <Typography variant="h3" color="initial">Process  </Typography><div className='bg-warning' id='c1'></div><br />
                  </div>
                  <div className='chart'>
                    <Typography variant="h3" color="initial">Complete  </Typography><div className='bg-success' id='c1'></div><br />
                  </div>

                  <PieChart className='pieChart'

                    data={[
                      { title: 'Two', value: 1, color: 'orange' },
                      { title: 'One', value: 15, color: 'gray', label: "Request" },
                      { title: 'Three', value: 10, color: 'green' },
                    ]}
                  />;
                </div>




              </div>
            </div>
          </Box>
        </main>
      </div>
    }</Fragment>
  )
}

export default AdminAuth(Dashboard)