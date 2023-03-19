
import React, { useContext } from 'react'
import { ColorModeContext, tokens } from "../../Global";
import './admin.css'
import { Box, IconButton, useTheme, InputBase } from '@mui/material';

import { LightModeOutlined, DarkModeOutlined, NotificationsOutlined, SettingsOutlined, PersonOutlined, SearchOutlined, DarkModeTwoTone, LightModeTwoTone, SearchTwoTone, NotificationsTwoTone, SettingsTwoTone, ManageAccountsTwoTone, ExitToAppTwoTone } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { AdminLogout } from '../../Action/Admin/Login';
import { useNavigate } from 'react-router-dom';

const AdminTopbar = () => {
  const themes = useTheme()
  const colors = tokens(themes.palette.mode)
  const colorModes = useContext(ColorModeContext)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const logout = () => { 
    dispatch(AdminLogout())
    navigate("/adlogin")
   }
  return (

    <>

        <Box display="flex" justifyContent="space-between" p={2} >

          {/* search bar */}
          <Box
            display="flex"
            backgroundColor={colors.primary[400]}
            borderRadius="3px"
          >
            <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
            <IconButton tpye="button" sx={{ p: 1 }}>
              <SearchTwoTone />
            </IconButton>
          </Box>
          {/* icon button */}
          <Box display="flex">

            <IconButton onClick={colorModes.toggleColorMode}>
              {themes.palette.mode === "light" ? (<DarkModeTwoTone />) : (<LightModeTwoTone />)}
            </IconButton>
            <IconButton>
              <SettingsTwoTone />
            </IconButton>
            <IconButton>
              <ManageAccountsTwoTone />
            </IconButton>
            <IconButton onClick={logout}>
              <ExitToAppTwoTone />
            </IconButton>
          </Box>
        </Box>
    
    </>
  )
}

export default AdminTopbar