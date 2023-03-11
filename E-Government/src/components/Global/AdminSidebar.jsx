import React, { useState } from 'react'
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar"
import 'react-pro-sidebar/dist/css/styles.css'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import Logo from '../Images/Icons/login.png';
import { Link } from 'react-router-dom'
import { tokens } from "../../Global";
import {  MenuOutlined, DashboardTwoTone, CoPresentTwoTone, FactCheckTwoTone, Groups2TwoTone, SpeakerNotesTwoTone, CategoryTwoTone } from '@mui/icons-material';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <MenuItem active={selected === title} style={{ color: colors.grey[100] }} onClick={() => setSelected(title)} icon={icon}>
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  )

}
const AdminSidebar = ({admin}) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selected, setSelected] = useState("empLogin")

  return (
    <Box  sx={{
      "& .pro-sidebar-inner": {
        background: `${colors.primary[400]} !important`
      },
      "& .pro-icon-wrapper": {
        backgroundColor: "transparent !important"
      },
      "& .pro-inner-item": {
        padding: "5px 35px 5px 20px !important"
      },
      "& .pro-inner-item:hover": {
        color: "#868dfb !important"
      },
      "& .pro-menu-item.active": {
        color: "#6870fa !important"
      },

    }}>
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* logo and menu icon */}
          <MenuItem onClick={() => setIsCollapsed(!isCollapsed)} icon={isCollapsed ? <MenuOutlined /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[600]
            }}>
            {!isCollapsed && (
              <Box display="flex" justifyContent="space-between" alignItems="center" ml="10px">
                <Typography variant='h4'>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlined />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {/* user */}
          {
            !isCollapsed && (
              <Box mb="25px">
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img src={Logo} alt="admin" width="100px" height="100px" style={{ cursor: "pointer", borderRadius: "50%" }} />
                </Box>
                <Box textAlign="center">
                  <Typography variant='h3' color={colors.grey[500]} fontWeight="bold" xs={{ m: "10px 0 0 0" }} >Hello,{admin && admin}</Typography>

                </Box>
              </Box>
            )}
          {/* menu item */}
          <Box paddingLeft={isCollapsed ? undefined : "3%"}>
            <Item
              title="Dashboard"
              to="/dashboard"
              icon={<DashboardTwoTone />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography variant="h5" color={colors.grey[500]} sx={{m:"10px 0 5px 15px"}}
            >Employees</Typography>
            <Item
              title="Empployee"
              to="/aemployee"
              icon={<CoPresentTwoTone />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="RequestedEmpployee"
              to="/aremployee"
              icon={<FactCheckTwoTone/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Complaint"
              to="/acomplaint"
              icon={<SpeakerNotesTwoTone />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Users"
              to="/auser"
              icon={<Groups2TwoTone />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Categories"
              to="/categories"
              icon={<CategoryTwoTone />}
              selected={selected}
              setSelected={setSelected}
            />
          
          </Box>
        </Menu>
      </ProSidebar>
    </Box >
  )
}

export default AdminSidebar