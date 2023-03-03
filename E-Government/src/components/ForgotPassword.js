import React, { useEffect } from 'react'
import { TextField, InputAdornment, Typography, Button, Grid } from '@mui/material'
import { Person, Login as LoginIcon} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../Action/User'
import { useAlert } from 'react-alert'
import { useFormik } from 'formik'
import { signUpSchema } from '../ValidateSchema/User'
import './Login.css'
const ForgotPassword = () => {
    const styles = {
        BoxStyle: {
            display: "flex",
            width: '30%',
            margin: '2rem auto',
            boxShadow: "3px 3px 6px",
            borderRadius: '10px',
            backgroundColor: 'white',
            '@media (max-width: 500px  && min-width: 00px  )': {
                display:"none",
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
            margin: "20px 0",
            padding: '5px 0'

        },

        link: {
            textDecoration: "none"
        },
        LoginBox: {
            marginTop:"2rem",
            width: "100%",
            padding:"1rem"
        },
  

    }
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const alert = useAlert();


    const { isAuthenticated } = useSelector((state) => state.user)
    const { message, LoginError } = useSelector((state) => state.user)

    useEffect(() => {
        if (message) {
            alert.success(message)
            dispatch({ type: "ClearMessage" })
        }

        if (LoginError) {
            alert.error(LoginError.response.data.message)

            dispatch({ type: "ClearMessage" })
        }
    }, [message, LoginError, alert, dispatch])

    isAuthenticated && navigate('/')



    const initialValues = {
        email: "",
        password: "",
    }

    const { values, touched, errors, handleBlur, handleChange, handleSubmit } = useFormik({

        initialValues: initialValues,
        validationSchema: signUpSchema,

        onSubmit: (values) => {
            dispatch(userLogin(values))

        }

    })





    return (
        <Grid sx={styles.BoxStyle}>

            
            <form onSubmit={handleSubmit} style={styles.LoginBox}  >
                <Typography variant="h3" 
                >
                   Fogot Password
                </Typography>

                <TextField sx={styles.inputStyle}
                    label='Username'
                    variant='standard'
                    placeholder='Email or Mobile No.'
                    InputLabelProps={{ style: { fontSize: 20 } }}
                    InputProps={{ startAdornment: (<InputAdornment position="start"> <Person /></InputAdornment>) }}
                    name="email"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    autoComplete='off'
                />
                {errors.email && touched.email ? (
                    <Typography color="red">{errors.email}</Typography>
                ) : null}
                

                <Button type='submit' sx={{ width: "100%" }} variant="contained" color="primary" endIcon={<LoginIcon />}>Send </Button>

              

            </form>
        </Grid>
    )
}

export default ForgotPassword
