import Register from './components/Register'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { LoadUser } from './Action/User'
import Home from './components/Home/Home'
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ForgotPassword from './components/ForgotPassword'
import Complaint from './components/Complaint/Complaint'

import { ColorModeContext, useMode } from "./Global";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { LoadAdmin } from './Action/Admin/Login'

// admin
import Dashboard from './components/Admin/Dashboard'
import AdminLogin from './components/Admin/AdminLogin'
import Employee from './components/Admin/Employee'
import RequestedEmployee from './components/Admin/RequestedEmployee'
import Aforgetpassword from './components/Admin/Aforgetpassword'

import Empregister from './components/Employee/Empregister'
import Emplogin from './components/Employee/Emplogin'

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
        <div className='app'>

          <Router>
            <Routes>
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
              <Route path='/' element={<Home />} />
              <Route path='/forgotPassword' element={<ForgotPassword />} />
              <Route path='/complaint' element={<Complaint />} />
              <Route path='/empregister' element={<Empregister />} />
              <Route path='/adlogin' element={<AdminLogin />} />
              <Route path='/aforgot' element={<Aforgetpassword />} />
              <Route path='/emplogin' element={<Emplogin />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/aemployee" element={<Employee />} />
              <Route path="/aremployee" element={<RequestedEmployee />} />


            </Routes>
          </Router>

        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
