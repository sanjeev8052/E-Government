import { FormControl, FormControlLabel, FormLabel, makeStyles, Radio, RadioGroup, TextField, Typography, Button, InputAdornment } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './Profile.css'
import AvatarImage from '../../Images/Avatar.png'
import Footer from '../Layout/Footer/Footer'
import { Edit, Email, KeyboardReturn, Person, PhoneAndroid } from '@mui/icons-material'
import { useSelector } from 'react-redux'
import { useFormik } from 'formik'

const useStyle = makeStyles({
    input: {
        margin: "1.5rem 0",
        width: "100%"
    }
})
const Profile = () => {
    const style = useStyle();

    const { userData } = useSelector(state => state.user)
    const [user, setUser] = useState({});

    useEffect(() => {
        setUser(userData)
    }, [userData]);


    const handleInput = (e) => {
        const { value, name } = e.target

        setUser({
            ...user,
            [name]: value
        })
    }
    const initialValues = {}
    const { values, touched, errors, handleBlur, handleChange, handleSubmit } = useFormik({

        initialValues: initialValues,


        onSubmit: (values) => {
            dispatch(userLogin(values))

        }

    })


    return (
        <>
            <div className='box'>
                <form >
                    <div className="main ">

                        <div className="row m-5">
                            <div className="col-sm-6">
                                <img className='img' src={AvatarImage} alt="" />
                            </div>
                            <div id='details' className="col-sm-6">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <Typography color="initial">Name   </Typography>
                                        <hr />
                                        <Typography color="initial">Email    </Typography>
                                        <hr />
                                        <Typography color="initial">Phone No </Typography>
                                        <hr />
                                    </div>
                                    <div className="col-sm-8">
                                        <Typography color="initial">{user && user.name}</Typography>
                                        <hr />
                                        <Typography color="initial">{user && user.email}</Typography>
                                        <hr />
                                        <Typography color="initial">{user && user.phone}</Typography>
                                        <hr />
                                    </div>
                                </div>
                                <Button variant="text" color="default">
                                    Back Home<KeyboardReturn />
                                </Button>
                            </div>
                        </div>
                        <hr />
                        <h2>Personal Details</h2>
                        <hr />
                        <div className="row">
                            <div className="col-sm-4">
                                <TextField className={style.input}
                                    id=""
                                    label=""
                                    variant='outlined'
                                    size='small'
                                    InputProps={{ startAdornment: (<InputAdornment position="start"> <Person /></InputAdornment>) }}
                                    placeholder='Enter Your Name'
                                    onChange={handleInput}
                                    name="name"
                                    value={user && user.name}
                                />
                                <FormControl>

                                    <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                            <div className="col-sm-4">
                                <TextField className={style.input}
                                    id=""
                                    label=""
                                    variant='outlined'
                                    size='small'
                                    name='phone'
                                    placeholder='Enter Your phone'
                                    onChange={handleInput}
                                    value={user && user.phone}
                                    InputProps={{ startAdornment: (<InputAdornment position="start"> <PhoneAndroid /></InputAdornment>) }}
                                />

                            </div>
                            <div className="col-sm-4">
                                <TextField className={style.input}
                                    id=""
                                    label=""
                                    variant='outlined'
                                    size='small'
                                    placeholder='Enter Your Email'
                                    value={user && user.email}
                                    name='email'
                                    onChange={handleInput}
                                    InputProps={{ startAdornment: (<InputAdornment position="start"> <Email /></InputAdornment>) }}
                                />

                            </div>
                            <hr />
                            <h2>Your Address </h2>
                            <hr />
                            <div className="col-sm-4">
                                <TextField className={style.input}
                                    id=""
                                    label=""
                                    variant='outlined'
                                    size='small'
                                    placeholder='Flat/House No'
                                />
                                <TextField className={style.input}
                                    id=""
                                    label=""
                                    variant='outlined'
                                    size='small'
                                    placeholder='Society/Apartment Name'
                                />
                            </div>
                            <div className="col-sm-4">
                                <TextField className={style.input}
                                    id=""
                                    label=""
                                    variant='outlined'
                                    size='small'
                                    placeholder='Area'
                                />
                                <TextField className={style.input}
                                    id=""
                                    label=""
                                    variant='outlined'
                                    size='small'
                                    placeholder='State'
                                />
                            </div>
                            <div className="col-sm-4">
                                <TextField className={style.input}
                                    id=""
                                    label=""
                                    variant='outlined'
                                    size='small'
                                    placeholder='City'
                                />
                                <TextField className={style.input}
                                    id=""
                                    label=""
                                    variant='outlined'
                                    size='small'
                                    placeholder='Pincode'
                                />
                            </div>
                        </div><br />
                        <Button fullWidth type='submit' variant="contained" color="primary">
                            <Edit />Update
                        </Button>
                    </div>
                </form>
                <Footer />
            </div>
        </>

    )
}

export default Profile
