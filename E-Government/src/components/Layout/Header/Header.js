import React, { useState } from 'react'
import { AppBar, Toolbar, Tabs, Tab, Typography, } from '@mui/material'
import { Link } from 'react-router-dom';
import { AssuredWorkload } from '@mui/icons-material/';
import AccountMenu from '../../User/AccountMenu'
import { useSelector } from 'react-redux'

const Header = () => {
    const { isAuthenticated } = useSelector((state) => state.user)

    const [value, setvalue] = useState(0);
    return (
        <div>
            <AppBar position="static" sx={{ background: "white" }}>
                <Toolbar>
                    <AssuredWorkload sx={{ color: "black", fontSize: "2rem" }} />
                    <Typography variant="h3" color="primary">E-Goverment</Typography>
                    <Tabs
                        sx={{ color: "balck" }}
                        onChange={(e, value, index) => setvalue(value, index)}
                        value={value}
                        indicatorColor='primary'>

                        <Tab component={Link} to={"/"} label="Home" />||
                        <Tab component={Link} label="Services" />
                        <Tab component={Link} label="AboutUs" />
                        <Tab component={Link} label="ContactUs" />

                    </Tabs>



                    {
                        isAuthenticated ? <AccountMenu />
                            : <>
                                <Typography sx={{ marginLeft: "auto", textDecoration: "none", fontSize: "1.5rem" }} component={Link} to={"/login"} variant='contained' color='primary'>Login</Typography>

                            </>
                    }
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
