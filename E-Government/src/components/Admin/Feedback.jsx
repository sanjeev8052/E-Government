
import { Box , useTheme } from '@mui/material'
import React from 'react'
import { tokens } from '../../Global'
import AdminSidebar from '../Global/AdminSidebar'
import AdminTopbar from '../Global/AdminTopbar'

import Header from '../Global/Header'
const Feedback = () => {
    const themes = useTheme()
    const colors = tokens(themes.palette.mode)
    return (
        <div className='app'>
            <AdminSidebar />
            <main className='content'>
                <AdminTopbar />
                <Box m="15px">
                    <Box justifyContent="space-between" alignItems="center" display='flex'>
                        <Header title="Feedback" subtitle="Welcome to Feedback Page" />
                    </Box>
                    <Box  display="flex" mt="5px"></Box>
                </Box>
            </main>
        </div>
    )
}

export default Feedback