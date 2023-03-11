import './App.css'
import Register from './components/User/Register'
import Login from './components/User/Login'
import Home from './components/Home/Home'
import { LoadUser } from './Action/User'
import UserForgotPassword from './components/User/ForgotPassword'
import Complaint from './components/Services/Complaint'
import BillPay from './components/User/BillPay'

// package
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'


import { ColorModeContext, useMode } from "./Global";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { LoadAdmin } from './Action/Admin/Login'

// admin
import Dashboard from './components/Admin/Dashboard'
import AdminLogin from './components/Admin/AdminLogin'
import Employee from './components/Admin/Employee'
import RequestedEmployee from './components/Admin/RequestedEmployee'
import Aforgetpassword from './components/Admin/Aforgetpassword'
import AdminComplaint from './components/Admin/AdminComplaint'

import Empregister from './components/Employee/Empregister'
import Emplogin from './components/Employee/Emplogin'
import User from './components/Admin/User'
import Categories from './components/Admin/Categories'

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
              <Route path='/UserForgotPassword' element={<UserForgotPassword />} />
              <Route path='/complaint' element={<Complaint />} />
              <Route path='/billpay' element={<BillPay />} />


              {/* Admin */}
              
              <Route path='/empregister' element={<Empregister />} />
              <Route path='/adlogin' element={<AdminLogin />} />
              <Route path='/aforgot' element={<Aforgetpassword />} />
              <Route path='/emplogin' element={<Emplogin />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/aemployee" element={<Employee />} />
              <Route path="/aremployee" element={<RequestedEmployee />} />
              <Route path="/acomplaint" element={<AdminComplaint />} />
              <Route path="/auser" element={<User />} />
              <Route path="/categories" element={<Categories />} />



            </Routes>
         
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
