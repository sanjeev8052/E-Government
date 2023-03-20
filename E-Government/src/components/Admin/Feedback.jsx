
import { Box, useTheme, Card, CardContent, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Getfeedback } from '../../Action/User'
import { tokens } from '../../Global'
import AdminSidebar from '../Global/AdminSidebar'
import AdminTopbar from '../Global/AdminTopbar'

import Header from '../Global/Header'
const Feedback = () => {
    const { getfeedback } = useSelector((state) => (state.user))
    const themes = useTheme()
    const colors = tokens(themes.palette.mode)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(Getfeedback())
    }, [])

    return (
        <div className='app'>
            <AdminSidebar />
            <main className='content'>
                <AdminTopbar />
                <Box m="15px">
                    <Box justifyContent="space-between" alignItems="center" display='flex'>
                        <Header title="Feedback" subtitle="Welcome to Feedback Page" />
                    </Box>
                    <Box display="flex" mt="5px">
                        <Card variant='outlined' sx={{}}>
                            <CardContent>
                                <Typography variant="h4" component="div">
                                    benevolent
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    adjective
                                </Typography>
                                <Typography variant="body2">
                                    well meaning and kindly.
                                    <br />
                                    {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>

                        </Card>
                    </Box>
                </Box>
            </main>
        </div>
    )
}

export default Feedback