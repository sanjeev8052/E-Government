import { Box, FormControl, Typography, Select, MenuItem, FormLabel, FormHelperText } from '@material-ui/core'
import React from 'react'
import Header from '../Layout/Header/Header'

const Dashboard = () => {
    return (
        <Box className='box'>
            <Box className='main'>
                <div className='row'>
                    <div className="col-sm-8">
                        <Typography variant="h4" color="initial">Dashboard</Typography><hr />
                        <div className="row">
                            <div className="col-lg-12">
                               <Typography variant="h4" color="initial">Resent Complaints</Typography>
                            </div>
                            <div className="col-lg-12"></div>
                            <div className="col-lg-12"></div>
                        </div>
                    </div>
                    <div className="col-sm-4">


                        <FormControl fullWidth>
                            <FormLabel>Select Info Your Choice</FormLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name="complaintType"
                            >
                                <MenuItem value="">Complaints</MenuItem>
                                <MenuItem value="">Taransaction</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
            </Box>
        </Box>
    )
}

export default Dashboard
