import Register from './components/Register'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Login from './components/Login'
import { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { LoadUser } from './Action/User'
import Home from './components/Home'
import './App.css'
import ForgotPassword from './components/ForgotPassword'
import Complaint from './components/Complaint/Complaint'


const App = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
   dispatch(LoadUser())
  },[dispatch])

  return (
    <div className='App'>

      <Router>
        <Header/>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={ <Login />} />
          <Route path='/' element={<Home/>}/>
          <Route path='/forgotPassword' element={<ForgotPassword/>}/>
          <Route path='/complaint' element={<Complaint/>}/>
          
        </Routes>
      </Router>

    </div>
  )
}

export default App
