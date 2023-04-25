import { Button, makeStyles } from '@material-ui/core'
import { Box, Typography } from '@mui/material'
import React, { Fragment, useState } from 'react'
// import "./../../index1.css"
import './Dashboard.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import AdminSidebar from '../Global/AdminSidebar'
import AdminTopbar from '../Global/AdminTopbar'
import Header from '../Global/Header'
import Loader from '../Layout/Loader'
import AdminAuth from '../ProtectedRoute/AdminAuth'
import { Person } from '@mui/icons-material'
import { PieChart } from 'react-minimal-pie-chart';
import { getUser } from '../../Action/Admin/User'
import { getEmp, getEmpDetails } from '../../Action/Admin/Employee'
import { getCompReq } from '../../Action/Services/Services'
import axios from 'axios'



const Dashboard = () => {

  const { loading, GetUser, emp } = useSelector((state) => (state.admin))
  const { getComReq } = useSelector((state) => (state.services))
  const [empCompDet, setEmpCompDet] = useState([]);

  const { getEmpData } = useSelector(state => state.employee)

  useEffect(() => {
    getAssignComp();
  }, [])

  console.log(empCompDet)
  const getAssignComp = async () => {
    try {
      const { data } = await axios.get('api/admin/getAssignComp')
      setEmpCompDet(data)
    } catch (error) {

    }
  }
  const getCompleteComplaint = async () => {
    const { data } = await axios.get("api/admin/compComplete")
    setData(data.complaint)
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser())
    dispatch(getEmp())
    dispatch(getCompReq())
  }, []);

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
              <Link to='/auser' className="col-2 dsItem1">
                <Person sx={{ fontSize: "4rem" }} />
                <Typography components={Link} to='/auser' variant="h2" color="lightblue">User</Typography>
                <Typography variant="h1" color="lightblue">{GetUser && GetUser.length}</Typography>

              </Link>
              <Link to='/aemployee' className="col-2 dsItem1">
                <Person sx={{ fontSize: "4rem" }} />
                <Typography variant="h2" color="lightblue">Employee</Typography>
                <Typography variant="h1" color="lightblue">{emp && emp.length}</Typography>

              </Link>
              <Link to='/aemployee' className="col-2 dsItem1">
                <Person sx={{ fontSize: "4rem" }} />
                <Typography variant="h2" color="lightblue">Req Emp</Typography>
                <Typography variant="h1" color="lightblue">{emp && emp.length}</Typography>

              </Link>
            </div>
            <div className='row pieChartBox'>

              <div className="col-sm-4  ">
                <Typography variant="h1" color="initial">Complaints</Typography>
                <div className='chart'>
                  <div className='bg-secondary' id='c1'></div> <Typography variant="h3" color="initial">Request  </Typography><br />
                </div>
                <div className='chart'>
                  <div className='bg-warning' id='c1'></div> <Typography variant="h3" color="initial">Process  </Typography><br />
                </div>
                <div className='chart'>
                  <div className='bg-success' id='c1'></div> <Typography variant="h3" color="initial">Complete  </Typography><br />
                </div>




              </div>
              <div className="col-sm-4  ">
                <Typography variant="h1" color="initial">Meter</Typography>
                <div className='chart'>
                  <div className='bg-secondary' id='c1'></div> <Typography variant="h3" color="initial">Request  </Typography><br />
                </div>
                <div className='chart'>
                  <div className='bg-warning' id='c1'></div> <Typography variant="h3" color="initial">Process  </Typography><br />
                </div>
                <div className='chart'>
                  <div className='bg-success' id='c1'></div> <Typography variant="h3" color="initial">Complete  </Typography><br />
                </div>

                <PieChart className='pieChart'

                  data={[
                    { title: 'Request', value: getComReq && getComReq.length, color: 'gray' },
                    { title: 'Process', value: empCompDet && empCompDet.length, color: 'orange', },
                    { title: 'Complete', value: 2, color: 'green' },
                  ]}
                />;
              </div>
              <div className="col-sm-4  ">
                <Typography variant="h1" color="initial">Complaints</Typography>
                <div className='chart'>
                  <div className='bg-secondary' id='c1'></div> <Typography variant="h3" color="initial">Request  </Typography><br />
                </div>
                <div className='chart'>
                  <div className='bg-warning' id='c1'></div> <Typography variant="h3" color="initial">Process  </Typography><br />
                </div>
                <div className='chart'>
                  <div className='bg-success' id='c1'></div> <Typography variant="h3" color="initial">Complete  </Typography><br />
                </div>

                <PieChart className='pieChart'

                  data={[
                    { title: 'Request', value: getComReq && getComReq.length, color: 'gray' },
                    { title: 'Process', value: empCompDet && empCompDet.length, color: 'orange', },
                    { title: 'Complete', value: 2, color: 'green' },
                  ]}
                />;
              </div>




            </div>
          </Box>
        </main>
      </div>
    }</Fragment>

  )
}

export default AdminAuth(Dashboard)