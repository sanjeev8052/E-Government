import { Box, FormControl, TextField, RadioGroup, FormControlLabel, Radio, Typography, useTheme, InputAdornment, Button, TableContainer, Table, TableHead, TableRow, TableCell, Paper, TableBody, IconButton } from '@mui/material'
import React, { useState } from 'react'
import AdminSidebar from '../Global/AdminSidebar'
import AdminTopbar from '../Global/AdminTopbar'
import Header from '../Global/Header'
import { tokens } from '../../Global'
import { Field, Form, Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { AddCircleOutlineTwoTone, CheckCircleOutlineTwoTone, DeleteForeverTwoTone, SpeakerNotesTwoTone} from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { Addcomcat, Delcomcat, Getcomcat } from '../../Action/Admin/Categories'
import { useEffect } from 'react'
const Categories = () => {
    const themes = useTheme()
    const colors = tokens(themes.palette.mode)
    const dispatch = useDispatch()
    const [status, setStatus] = useState(1)
    const handler = (status) => {
        setStatus(status)
    }

    const {getcomcat} = useSelector((state) => (state.services))
    const styles = {
        textfield: {
            width: "100%",
            margin: "40px auto 10px auto",
            padding: "5px auto",
        },
        btn: {
            width: "100%",
            margin: "10px auto",
            borderRadius: "100px"
        },
    }

    const com = {
        complaintType: ""
    }
    const bills = {
        billsType: ""
    }
    const cer = {
        certificateType: ""
    }
    const meter = {
        meterType: ""
    }
    const validationSchema = Yup.object().shape({
        complaintType: Yup.string().required("!! Please Fill This Field..")
    })
        //  complaint
    const subcom =  (values, props) =>{
        dispatch(Addcomcat(values))
    }
    const delcom = (id) => {
            dispatch(Delcomcat(id))
    }
    useEffect(() => {
      dispatch(Getcomcat())
    }, [])
    
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

                                <FormControlLabel value='Complainttype' label={<Typography variant="h4" color={colors.greenAccent[600]}> Complaint Type</Typography>} control={<Radio onClick={(e) => handler(1)} />}  ></FormControlLabel>

                                <FormControlLabel value='billstype' label={<Typography variant="h4" color={colors.greenAccent[600]}> Bill Type</Typography>} control={<Radio onClick={(e) => handler(2)} />}></FormControlLabel>

                                <FormControlLabel value='meterype' label={<Typography variant="h4" color={colors.greenAccent[600]}> Meter Type</Typography>} control={<Radio onClick={(e) => handler(3)} />}></FormControlLabel>

                                <FormControlLabel value='certificatetype' label={<Typography variant="h4" color={colors.greenAccent[600]}> Certificate Type</Typography>} control={<Radio onClick={(e) => handler(4)} />}></FormControlLabel>

                            </RadioGroup>
                        </FormControl>
                    </Box>
                    {
                        status === 1 &&
                        <Box justifyContent='center' alignItems='center' display='flex' m="40px auto" sx={{ backgroundColor: colors.primary[400], width: "50%", borderRadius: "23px" }}>
                            <Formik initialValues={com} validationSchema={validationSchema} onSubmit={subcom} >
                                {(props) => (
                                    <Form>
                                        <Typography variant="h2" mt="5px" color="initial">Add Complaint Type </Typography>
                                        <Field as={TextField}
                                            
                                            sx={styles.textfield}
                                            name="complaintType"
                                            label="Add Complaint Type"
                                            variant='standard'
                                            type="text"
                                            color='secondary'
                                            placeholder='Enter Complaint Type..'
                                            InputLabelProps={{ style: { fontSize: 20 } }}
                                            InputProps={{
                                                startAdornment: (<InputAdornment position="start"> <SpeakerNotesTwoTone color='secondary' /></InputAdornment>)
                                            }}

                                        />
                                        <Typography variant="subtitle2" color="crimson">{<ErrorMessage name='complaintType' />}</Typography>
                                        <Button type="submit" sx={styles.btn} variant="contained" color="secondary" startIcon={<AddCircleOutlineTwoTone />} >Add</Button>
                                        <Box mt="10px">
                                            <TableContainer component={Paper}>
                                                <Table size="medium" >
                                                    <TableHead sx={{ backgroundColor: colors.greenAccent[700] }}>
                                                        <TableRow>
                                                            <TableCell>Name</TableCell>
                                                            <TableCell>Delete</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody sx={{ backgroundColor: colors.grey[600] }}>

                                        {getcomcat <= 0 ? <TableRow>
                                            <TableCell colSpan={6}>
                                                <Typography sx={{ margin: "10px auto", width: "10rem" }} variant="h2" color="primary">No Requested Employee Data</Typography>
                                            </TableCell>
                                        </TableRow>
                                            :
                                            getcomcat?.map((data) => (
                                                <TableRow key={data._id}>
                                                    <TableCell >{data.complaintType}</TableCell>
                                                    
                                                    <TableCell >
                                                        <IconButton aria-label="correct"  color="error" onClick={() => { delcom(data._id) }} >
                                                          <DeleteForeverTwoTone/>
                                                        </IconButton>
                                                        
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        }
                                    </TableBody>
                                                </Table>
                                            </TableContainer>
                                        </Box>
                                    </Form>
                                )}
                            </Formik>
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