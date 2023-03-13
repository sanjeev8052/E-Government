import React, { useState } from 'react'
import { TextField, InputAdornment, Typography, Button, FormControlLabel, Checkbox, Grid } from '@mui/material'
import { Person, Login, Email, Password, Phone } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userRegister } from '../../Action/User'
import bgImage from '../../Images/bgImage3.jpg'
import signUpImage from '../../Images/bgImage4.jpg'
import Footer from '../Layout/Footer/Footer'
const Register = () => {
    const styles = { 
        mainBox:{
            width:"100vw",
            height:"55vh",
            paddingTop:"6rem",
            background: "linear-gradient(to top right ,rgb(48, 94, 234),rgb(214, 245, 214))",
            backgroundSize: "cover"
        },
        BoxStyle: {
            display: "flex",
            width: '70%',
            margin: 'auto',
            boxShadow: "4px 4px 8px",
            borderRadius: '10px',
            backgroundColor: 'rgb(255, 255, 255 )',
            '@media (max-width: 500px  && min-width: 00px  )': {
                display: "none",
                width: '90%',
                borderRadius: '5px',
                margin: '8rem auto'
            },
            '@media ( min-width:820px && max-width: 1100px)': {
                width: '70%',
                borderRadius: '5px',
                margin: '17rem auto'
            },
        },
        inputStyle: {
            width: '100%',
            margin: "10px 0",
            padding: '5px 0',
            color:"white"
        },

        account: {
            display: "block",
            fontSize: "10rem",
            margin: 'auto'
        },

        link: {
            textDecoration: "none"
        },
        signUpBox: {
            marginTop: "2rem",
            width: "50%",
            padding: "3rem"
        },
        LoginImage: {
            width: "50%",
            borderRadius: '10px',

        }
    }
    const [user, setUser] = useState({
        name: "",
        phone: "",
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
        <Grid sx={styles.mainBox}>
            <Grid sx={styles.BoxStyle}>

               
         <form style={styles.signUpBox}>
         <Typography variant="h2" mb={3}>Create Account</Typography>
     
     <TextField sx={styles.inputStyle}
         InputLabelProps={{ style: { fontSize: 20 } }}
         InputProps={{ startAdornment: (<InputAdornment position="start">  <Person /> </InputAdornment>) }}
         label='Enter Name' variant='standard'
         name="name"
         value={user.name}
         onChange={handleInput}
     />

     <TextField sx={styles.inputStyle}
         InputLabelProps={{ style: { fontSize: 20 } }}
         InputProps={{ startAdornment: (<InputAdornment position="start">  <Phone /> </InputAdornment>) ,}}
         label='Enter Mobile No' variant='standard'
         name="phone"
         value={user.phone}
         onChange={handleInput}
     />

     <TextField sx={styles.inputStyle}
         InputLabelProps={{ style: { fontSize: 20 } }}
         InputProps={{ startAdornment: (<InputAdornment position="start">  <Email /> </InputAdornment>) }}
         label='Enter Email' variant='standard'
         name="email"
         value={user.email}
         onChange={handleInput}
     />

     <TextField sx={styles.inputStyle}
         InputLabelProps={{ style: { fontSize: 20 } }} type='password'
         InputProps={{ startAdornment: (<InputAdornment position="start">  <Password /> </InputAdornment>) }}
         label='Enter Password' variant='standard'
         name="password"
         value={user.password}
         onChange={handleInput}
     />

     <TextField sx={styles.inputStyle}
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
         </form>
         <img src={signUpImage} style={styles.LoginImage} alt="" />
            </Grid>
            <Footer/>
        </Grid>
    )
}

export default Register
