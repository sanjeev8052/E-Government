import * as React from 'react';
import Box from '@mui/material/Box';
import { Avatar } from '@mui/material/';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import { LogoutUser } from '../../Action/User';
import { Email, Person } from '@mui/icons-material';
import { Typography } from '@mui/material'
import profileDP from '../../Images/Avatar.jpg'

export default function AccountMenu() {
  const { userData, userLoading } = useSelector(state => state.user)

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch()

  const logout = () => {
    dispatch(LogoutUser())
  }
  return (
    <React.Fragment>
      <Box sx={{ display: "inline", alignItems: 'center', textAlign: 'center', width: "auto", marginLeft: "auto" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 45, height: 45 }}></Avatar>
          </IconButton>
        </Tooltip>
      </Box>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}

        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >

        <MenuItem >
        
          <img style={{ width: '10rem', height: '10rem', margin:"auto" , borderRadius:"20%" , border:"solid 2px black" }} src={profileDP} alt='Avetar' />
        </MenuItem>   <MenuItem >
          <ListItemIcon >
            <Person />
          </ListItemIcon>
          <Typography variant="body1" color="initial">Hello,{userData && userData.name}</Typography>
        </MenuItem>
        <MenuItem >
          <ListItemIcon>
            <Email />
          </ListItemIcon>
          <Typography variant="body1" color="initial">{userData && userData.email}</Typography>
        </MenuItem>
        <MenuItem onClick={logout}>
          <ListItemIcon >
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}