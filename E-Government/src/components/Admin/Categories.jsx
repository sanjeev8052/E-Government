import { Box, FormControl, FormLabel, FormHelperText, RadioGroup, FormControlLabel, Radio, Typography , useTheme} from '@mui/material'
import React, { useState } from 'react'
import AdminSidebar from '../Global/AdminSidebar'
import AdminTopbar from '../Global/AdminTopbar'
import Header from '../Global/Header'
import { tokens } from '../../Global'
const Categories = () => {

    const themes = useTheme()
    const colors = tokens(themes.palette.mode)

    const [status, setStatus] = useState(1  )
    // const [complaint, setComplaint] = useState(false)
    // const [bill, setBill] = useState(false)
    // const [meter, setMeter] = useState(false)
    // const [certificate, setCertificate] = useState(false)

    const handler = (status) => { 
        setStatus(status)
     }
     

    return (
        <div className='app'>
            <AdminSidebar />
            <main className='content'>
                <AdminTopbar />
                <Box m="15px">
                    <Box justifyContent="space-between" alignItems="center" display='flex'>
                        <Header title="Categories" subtitle="Welcome Your Categories Details Page" />
                    </Box>
                    <Box justifyContent="center" alignItems="center" display="flex" mt="5px">
                        <FormControl>
                            <RadioGroup row aria-label="categories" defaultValue="Complainttype" name='categories group'>
                                
                                <FormControlLabel value='Complainttype' label={<Typography variant="h4" color={colors.greenAccent[600]}> Complaint Type</Typography>} control={<Radio onClick={(e) => handler(1)}  />}  ></FormControlLabel>

                                <FormControlLabel value='billstype' label={<Typography variant="h4" color={colors.greenAccent[600]}> Bill Type</Typography>} control={<Radio onClick={(e) =>handler(2)}  />}></FormControlLabel>
                                
                                <FormControlLabel value='meterype' label={<Typography variant="h4" color={colors.greenAccent[600]}> Meter Type</Typography>} control={<Radio onClick={(e) => handler(3)}  />}></FormControlLabel>
                                
                                <FormControlLabel value='certificatetype' label={<Typography variant="h4" color={colors.greenAccent[600]}> Certificate Type</Typography>} control={<Radio onClick={(e) => handler(4)}  />}></FormControlLabel>

                            </RadioGroup>
                        </FormControl>
                    </Box>
                    {
                        status === 1 &&
                        <Box justifyContent='center' alignItems='center' display='flex' mt='20px'>
                            <Typography variant="h2" color="initial">Add Complaint Type </Typography>
                        </Box>


                    }
                    {
                          status === 2 && <Box mt='20px' justifyContent='center' alignItems='center' display='flex'>
                            <h1>Bills</h1>
                        </Box>
                    }
                    {
                          status === 3 && <Box justifyContent='center' alignItems='center' display='flex' mt='20px'>
                            <h1>Meter</h1>
                        </Box>
                    }
                    {
                          status === 4 && <Box justifyContent='center' alignItems='center' display='flex' mt='20px'>
                            <h1>certificate</h1>
                        </Box>
                    }
                </Box>
            </main>
        </div>
    )
}

export default Categories