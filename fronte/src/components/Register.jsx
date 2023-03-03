import React, { useState } from 'react'
import { TextField, InputAdornment, Typography, Button, FormControlLabel, Checkbox, Grid } from '@mui/material'
import { Person, Login, Email, Password, Phone } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userRegister } from '../Action/User'


const Register = () => {
    const inputStyle = {
        width: '100%',
        margin: "10px 0",
        padding: '5px 0'

    }
    const BoxStyle = {
        width: '30%',
        margin: '2rem auto',
        padding: "2rem",
        boxShadow: "3px 3px 6px",
        borderRadius: '10px',
        backgroundColor: 'white',
        '@media (max-width: 500px)': {
            width: '90%',
        },
    }
    const [user, setUser] = useState({
        name: "",
        mobile: "",
        email: "",
        password: "",
        cpassword: ""
    })
    const handleInput = (event) => {
        const { value, name } = event.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const dispatch = useDispatch();
    const handleSubmit =()=>{
         dispatch(userRegister(user))
    }
   
    return (
        <Grid container sx={BoxStyle}>

            <Typography variant="h4">Create Account</Typography>
     
            <TextField sx={inputStyle}
                InputLabelProps={{ style: { fontSize: 20 } }}
                InputProps={{ startAdornment: (<InputAdornment position="start">  <Person /> </InputAdornment>) }}
                label='Enter Name' variant='standard'
                name="name"
                value={user.name}
                onChange={handleInput}
            />

            <TextField sx={inputStyle}
                InputLabelProps={{ style: { fontSize: 20 } }}
                InputProps={{ startAdornment: (<InputAdornment position="start">  <Phone /> </InputAdornment>) ,}}
                label='Enter Mobile No' variant='standard'
                name="mobile"
                value={user.mobile}
                onChange={handleInput}
            />

            <TextField sx={inputStyle}
                InputLabelProps={{ style: { fontSize: 20 } }}
                InputProps={{ startAdornment: (<InputAdornment position="start">  <Email /> </InputAdornment>) }}
                label='Enter Email' variant='standard'
                name="email"
                value={user.email}
                onChange={handleInput}
            />

            <TextField sx={inputStyle}
                InputLabelProps={{ style: { fontSize: 20 } }} type='password'
                InputProps={{ startAdornment: (<InputAdornment position="start">  <Password /> </InputAdornment>) }}
                label='Enter Password' variant='standard'
                name="password"
                value={user.password}
                onChange={handleInput}
            />

            <TextField sx={inputStyle}
                InputLabelProps={{ style: { fontSize: 20 } }} type='password'
                InputProps={{ startAdornment: (<InputAdornment position="start">  <Password /> </InputAdornment>) }}
                label='Confirm Password' variant='standard'
                name="cpassword"
                value={user.cpassword}
                onChange={handleInput}
            />
            <FormControlLabel
                label="I agree to the terms and condition "
                control={
                    <Checkbox
                        value=""
                        color="primary"
                    />
                }
            />
            <Button sx={{ width: "100%" }} onClick={handleSubmit} variant="contained" color="primary">
                Register
            </Button>

            <Typography sx={{ marginTop: "2rem" }} >Have an already account <Button component={Link} to='/login' variant="text" endIcon={<Login />}>
                Login
            </Button> </Typography>

        </Grid>
    )
}

export default Register
