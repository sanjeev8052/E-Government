import './App.css'
// User
import Register from './components/User/Register'
import Login from './components/User/Login'
import Home from './components/Home/Home'
import { getProfileImage, LoadUser } from './Action/User'
import UserForgotPassword from './components/User/ForgotPassword'
import Profile from './components/User/Profile'
import ResetPassword from './components/User/ResetPassword'
import UserDashboard from './components/User/Dashboard'
// package
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ColorModeContext, useMode } from "./Global";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { LoadAdmin, getAdmnProfileImage } from './Action/Admin/Login'

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
import CompletedComplaint from './components/Admin/CompletedComplaint'
import Bills from './components/Admin/Bills'
import PendingBills from './components/Admin/PendingBills'
import PaidBills from './components/Admin/PaidBills'
import Tester from './components/Admin/Tester'
import UserHeader from './components/User/UserHeader/UserHeader'


// Employee
import Empregister from './components/Employee/Empregister'
import Emplogin from './components/Employee/Emplogin'
import Work from './components/Employee/Work'
import EProfile from './components/Employee/Profile'
import EmpforgetPasswrod from './components/Employee/EmpforgetPasswrod'
import EmpreserPassword from './components/Employee/EmpreserPassword'

// Others
import AssignModel from './components/Global/AssignModel'
import Loader from './components/Layout/Loader'

// Services
import MeterApply from './components/Services/MeterApply'
import BillPay from './components/Services/BillPayment/BillPay'
import Complaint from './components/Services/Complaint'
import Temp from './components/Temp'
import { getEmpDetails, getEmpProfileImage } from './Action/Employee/register'

const App = () => {
  const [theme, colorMode] = useMode()

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoadUser())
    dispatch(LoadAdmin())
    dispatch(getEmpDetails())
    dispatch(getProfileImage())
    dispatch(getEmpProfileImage())
    dispatch(getAdmnProfileImage())
  }, [dispatch])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className=''>


          <Routes>
            {/* User */}
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Home />} />
            <Route path='forgotpassword' element={<UserForgotPassword />} />
            <Route path='reset/password/:token' element={< ResetPassword />} />
            <Route path='/userHeader' element={<UserHeader />} />
            <Route path='/Profile' element={<Profile />} />
            <Route path='/UserDashboard' element={<UserDashboard />} />


            {/* Services */}
            <Route path='/complaint' element={<Complaint />} />
            <Route path='/billpay' element={<BillPay />} />
            <Route path='/meterApply/' element={<MeterApply />} />
            <Route path='/Temp/' element={<Temp />} />

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
            <Route path="/assign" element={<AssignCom />} />
            <Route path="/assigncom/:_id" element={<AssignModel />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/completecom" element={<CompletedComplaint />} />
            <Route path="/abills" element={<Bills />} />
            <Route path="/pbills" element={<PendingBills />} />
            <Route path="/pabills" element={<PaidBills />} />
          



            {/* Employee */}

            <Route path="/emplogin" element={<Emplogin />} />
            <Route path='/empregister' element={<Empregister />} />
            <Route path='/work' element={<Work />} />
            <Route path='eforgotpassword' element={<EmpforgetPasswrod />} />
            <Route path='ereset/password/:token' element={< EmpreserPassword />} />
            {/* <Route path="/emp/register" element={<Empregister/>} /> */}
            <Route path="/emplogin" element={<Emplogin />} />
            <Route path='/empregister' element={<Empregister />} />
            <Route path='/work' element={<Work />} />
            <Route path='/eprofile' element={<EProfile />} />
            {/* <Route path="/emp/register" element={<Empregister/>} /> */}


          </Routes>

        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
