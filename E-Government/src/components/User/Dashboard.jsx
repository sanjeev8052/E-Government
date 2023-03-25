import { Box, FormControl, Typography, Select, MenuItem, FormLabel, FormHelperText, Button, TableRow, TableCell } from '@material-ui/core'
import React from 'react'
import axios from 'axios'
import Header from '../Layout/Header/Header'
import { useEffect } from 'react'
import { useState } from 'react'
import UpdateComplaint from './UpdateComplaint'

const Dashboard = () => {
    const [call, setCall] = useState(false);
    const [recentCompData, setRecentCompData] = useState();
    const [compCopleteData, setcompCopleteData] = useState();

    useEffect(() => {
        resentComp();
        completeComp();
    }, [call]);

    const resentComp = async () => {
        const { data } = await axios.get("api/searchCompByEmail")
        setRecentCompData(data)
    }
    const completeComp = async () => {
        const { data } = await axios.get("api/admin/compComplete")
        setcompCopleteData(data.complaint)
    }
    console.log(compCopleteData)
    return (
        <Box className='box'>
            <Box className='main'>
                <div className='row'>
                    <div className="col-sm-8">
                        <Typography variant="h4" color="initial">Dashboard</Typography><hr />
                        <div className="row">
                            <div className="col-lg-12">
                                <Typography variant="h4" className='text-center' color="initial">Resent Complaints</Typography>
                                {recentCompData && recentCompData <= 0 ?
                                    <Typography variant="h3" className='text-center text-warning' color="initial">{recentCompData.length}</Typography>
                                    :
                                    recentCompData?.map((data) => (
                                        <TableRow key={data._id}>
                                            <TableCell>Complaint Id :</TableCell>
                                            <TableCell>{data._id}</TableCell>
                                            <TableCell>
                                                <UpdateComplaint id={data._id} />
                                            </TableCell>


                                        </TableRow>

                                    ))
                                }

                            </div>

                            <div className="col-lg-12">
                                <Typography variant="h4" className='text-center' color="initial">Complete Complaints</Typography>
                                {compCopleteData && <Typography variant="h3" className='text-success text-center' >{compCopleteData.length}</Typography>}

                            </div>
                            <div className="col-lg-12">

                            </div>
                            <div className="col-lg-12"></div>
                        </div>
                    </div>
                    <div className="col-sm-4">

                        <Button variant="contained" onClick={() => setCall(true)} color="primary">
                            Reload
                        </Button>
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
