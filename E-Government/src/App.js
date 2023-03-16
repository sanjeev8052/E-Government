import './App.css'
// User
import Register from './components/User/Register'
import Login from './components/User/Login'
import Home from './components/Home/Home'
import { LoadUser } from './Action/User'
import UserForgotPassword from './components/User/ForgotPassword'
import UserHeader from './components/User/UserHeader/UserHeader'
import Profile from './components/User/Profile'
import ResetPassword from './components/User/ResetPassword'

// package
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ColorModeContext, useMode } from "./Global";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { LoadAdmin } from './Action/Admin/Login'

// admin
import AssignCom from './components/Admin/AssignCom'
import Dashboard from './components/Admin/Dashboard'
import AdminLogin from './components/Admin/AdminLogin'
import Employee from './components/Admin/Employee'
import RequestedEmployee from './components/Admin/RequestedEmployee'
import Aforgetpassword from './components/Admin/Aforgetpassword'
import AdminComplaint from './components/Admin/AdminComplaint'
import User from './components/Admin/User'
import Categories from './components/Admin/Categories'
import Feedback from './components/Admin/Feedback'


// Employee
import Empregister from './components/Employee/Empregister'
import Emplogin from './components/Employee/Emplogin'
import Work from './components/Employee/Work'

// Others
import AssignModel from './components/Global/AssignModel'
import Loader from './components/Layout/Loader'

// Services
import MeterApply from './components/Services/MeterApply'
import BillPay from './components/Services/BillPay'
import Complaint from './components/Services/Complaint'

const App = () => {
  const [theme, colorMode] = useMode()

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoadUser())
    dispatch(LoadAdmin())
  }, [dispatch])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className=''>
 
         
            <Routes>
              {/* User */}
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
              <Route path='/' element={<Home />} />
              <Route path='forgotpassword' element={<UserForgotPassword />} />
              <Route path='reset/password/:token' element={< ResetPassword/>} />
              <Route path='/userHeader' element={<UserHeader />} />
              <Route path='/Profile' element={<Profile />} />

              {/* Services */}
              <Route path='/complaint' element={<Complaint />} />
              <Route path='/billpay' element={<BillPay />} />
              <Route path='/meterApply/' element={<MeterApply />} />

              {/* Admin */}
              
             
              <Route path='/adlogin' element={<AdminLogin />} />
              <Route path='/aforgot' element={<Aforgetpassword />} />
              <Route path='/emplogin' element={<Emplogin />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/aemployee" element={<Employee />} />
              <Route path="/aremployee" element={<RequestedEmployee />} />
              <Route path="/acomplaint" element={<AdminComplaint />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/auser" element={<User />} />
              <Route path="/spiner" element={<Loader />} />
              <Route path="/Categories" element={<Categories />} />
              <Route path="/assign" element={<AssignCom/>} />
              <Route path="/assigncom/:_id" element={<AssignModel/>} />
              <Route path="/feedback" element={<Feedback  />} />



               {/* Employee */}

               <Route path="/emplogin" element={<Emplogin/>} />
               <Route path='/empregister' element={<Empregister />} />
               <Route path='/work' element={<Work />} />
               {/* <Route path="/emp/register" element={<Empregister/>} /> */}


            </Routes>
         
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
