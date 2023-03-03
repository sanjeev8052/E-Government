import React from 'react'
import AppBar from '@mui/material/AppBar'
import { Tab, Tabs } from '@mui/material'

const Tamp = () => {
    return (
        <div>
            <h1>App Bar</h1>
            <AppBar position="static" color="primary">
                <Tabs value={1}>
                    <Tab label="item 1"/>
                    <Tab label="item 2"/>
                    <Tab label="item 3"/>
                </Tabs>
            </AppBar>
        </div>
    )
}

export default Tamp
