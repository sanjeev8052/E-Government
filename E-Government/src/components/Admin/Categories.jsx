import { Box, FormControl, TextField, RadioGroup, FormControlLabel, Radio, Typography, useTheme, InputAdornment, Button, TableContainer, Table, TableHead, TableRow, TableCell, Paper, TableBody, IconButton } from '@mui/material'
import React, { useState } from 'react'
import AdminSidebar from '../Global/AdminSidebar'
import AdminTopbar from '../Global/AdminTopbar'
import Header from '../Global/Header'
import { tokens } from '../../Global'
import { Field, Form, Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { AddCircleOutlineTwoTone, DeleteForeverTwoTone, SpeakerNotesTwoTone } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { Addbillcat, Addcercat, Addcomcat, Addmetercat, Delbillcat, Delcercat, Delcomcat, Delmetercat, Getbillcat, Getcercat, Getcomcat, Getmetercat } from '../../Action/Admin/Categories'
import { useEffect } from 'react'
import { CircularProgress } from '@material-ui/core'
const Categories = () => {
    const themes = useTheme()
    const colors = tokens(themes.palette.mode)
    const dispatch = useDispatch()
    const [status, setStatus] = useState(1)
    const handler = (status) => {
        setStatus(status)
    }

    const { getcomcat, getbillcat, getmetercat, getcercat , loading } = useSelector((state) => (state.services))
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
        complaintType: "",
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
    const validationcomplaint = Yup.object().shape({
        complaintType: Yup.string().required("!! Please Fill This Field.."),
      
    })
    const validationbill = Yup.object().shape({
        
        billsType: Yup.string().required("!! Please Fill This Field.."),
        

    })
    const validationcertificate = Yup.object().shape({
       
        certificateType: Yup.string().required("!! Please Fill This Field.."),
       

    })
    const validationmeter = Yup.object().shape({
       
        meterType: Yup.string().required("!! Please Fill This Field.."),

    })
   
    const onSubmit = (values, props) => {
       dispatch(Addcomcat(values))
      }
    const delcom = (id) => {
        dispatch(Delcomcat(id))
       
    }
    // for bills
    const subbill = (values, props) => {
          dispatch(Addbillcat(values))
       
    }
    const delbill = (id) => {
        dispatch(Delbillcat(id))
   
    }
    // for meter
    const submet = (values, props) => {
        dispatch(Addmetercat(values))
    }
    const delmet = (id) => {
        dispatch(Delmetercat(id))
     
    }
    // for certificate
    const subcer = (values, props) => {
        dispatch(Addcercat(values))
    }
    const delcer = (id) => {
        dispatch(Delcercat(id))
     
    }

    useEffect(() => {
        dispatch(Getcomcat())
        dispatch(Getbillcat())
        dispatch(Getcercat())
        dispatch(Getmetercat())
    }, [dispatch])

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
                            <Formik initialValues={com}  onSubmit={onSubmit} validationSchema={validationcomplaint} >
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
                                        <Button type="submit" sx={styles.btn} variant="contained" color="secondary" 
                                        // startIcon={<AddCircleOutlineTwoTone />}
                                         >Add</Button>
                                        <Box mt="10px" mb='20px'>
                                            <TableContainer  >
                                                <Table size="medium"  >
                                                    <TableHead sx={{ backgroundColor: colors.greenAccent[700] }}  >
                                                        <TableRow>
                                                            <TableCell>Name</TableCell>
                                                            <TableCell>Delete</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody sx={{ backgroundColor: colors.grey[600] }}>

                                                        {getcomcat <= 0 ? <TableRow>
                                                            <TableCell colSpan={2}>
                                                                <Typography sx={{ margin: "10px auto", width: "10rem" }} variant="h2" color="primary">No Compliant Type Added</Typography>
                                                            </TableCell>
                                                        </TableRow>
                                                            :
                                                            getcomcat?.map((data) => (
                                                                <TableRow key={data._id}>
                                                                    <TableCell >{data.complaintType}</TableCell>

                                                                    <TableCell >
                                                                        <IconButton disabled={loading} aria-label="correct" color="error" onClick={() => { delcom(data._id) }} >
                                                                       <DeleteForeverTwoTone  />
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
                        status === 2 &&
                        <Box justifyContent='center' alignItems='center' display='flex' m="40px auto" sx={{ backgroundColor: colors.primary[400], width: "50%", borderRadius: "23px" }}>
                            <Formik initialValues={bills} validationSchema={validationbill} onSubmit={subbill} >
                                {(props) => (
                                    <Form>
                                        <Typography variant="h2" mt="5px" color="initial">Add Bill Type </Typography>
                                        <Field as={TextField}
                                            sx={styles.textfield}
                                            name="billsType"
                                            label="Add Bills Type"
                                            variant='standard'
                                            type="text"
                                            color='secondary'
                                            placeholder='Enter Complaint Type..'
                                            InputLabelProps={{ style: { fontSize: 20 } }}
                                            InputProps={{
                                                startAdornment: (<InputAdornment position="start"> <SpeakerNotesTwoTone color='secondary' /></InputAdornment>)
                                            }}

                                        />
                                        <Typography variant="subtitle2" color="crimson">{<ErrorMessage name='billsType' />}</Typography>
                                        <Button type="submit" sx={styles.btn} variant="contained" color="secondary" startIcon={<AddCircleOutlineTwoTone />} >Add</Button>
                                        <Box mt="10px"  mb="20px">
                                            <TableContainer >
                                                <Table size="medium" >
                                                    <TableHead sx={{ backgroundColor: colors.greenAccent[700] }}>
                                                        <TableRow>
                                                            <TableCell>Name</TableCell>
                                                            <TableCell>Delete</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody sx={{ backgroundColor: colors.grey[600] }}>

                                                        {getbillcat <= 0 ? <TableRow>
                                                            <TableCell colSpan={2}>
                                                                <Typography sx={{ margin: "10px auto", width: "10rem" }} variant="h2" color="primary">No Bill Type Added</Typography>
                                                            </TableCell>
                                                        </TableRow>
                                                            :
                                                            getbillcat?.map((data) => (
                                                                <TableRow key={data._id}>
                                                                    <TableCell >{data.billsType}</TableCell>

                                                                    <TableCell >
                                                                        <IconButton disabled={loading} aria-label="correct" color="error" onClick={() => { delbill(data._id) }} >
                                                                            <DeleteForeverTwoTone />
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
                        status === 3 &&
                        <Box justifyContent='center' alignItems='center' display='flex' m="40px auto" sx={{ backgroundColor: colors.primary[400], width: "50%", borderRadius: "23px" }}>
                            <Formik initialValues={meter} validationSchema={validationmeter}  onSubmit={submet}>
                                {(props) => (
                                    <Form>
                                        <Typography variant="h2" mt="5px" color="initial">Add Meter Type </Typography>
                                        <Field as={TextField}

                                            sx={styles.textfield}
                                            name="meterType"
                                            label="Add Meter Type"
                                            variant='standard'
                                            type="text"
                                            color='secondary'
                                            placeholder='Enter Complaint Type..'
                                            InputLabelProps={{ style: { fontSize: 20 } }}
                                            InputProps={{
                                                startAdornment: (<InputAdornment position="start"> <SpeakerNotesTwoTone color='secondary' /></InputAdornment>)
                                            }}

                                        />
                                        <Typography variant="subtitle2" color="crimson">{<ErrorMessage name='meterType' />}</Typography>
                                        <Button type="submit" sx={styles.btn} variant="contained" color="secondary" startIcon={<AddCircleOutlineTwoTone />} >Add</Button>
                                        <Box mt="10px"  mb="20px">
                                            <TableContainer >
                                                <Table size="medium" >
                                                    <TableHead sx={{ backgroundColor: colors.greenAccent[700] }}>
                                                        <TableRow>
                                                            <TableCell>Name</TableCell>
                                                            <TableCell>Delete</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody sx={{ backgroundColor: colors.grey[600] }}>

                                                        {getmetercat <= 0 ? <TableRow>
                                                            <TableCell colSpan={2}>
                                                                <Typography sx={{ margin: "10px auto", width: "10rem" }} variant="h2" color="primary">No Meter Type Added </Typography>
                                                            </TableCell>
                                                        </TableRow>
                                                            :
                                                            getmetercat?.map((data) => (
                                                                <TableRow key={data._id}>
                                                                    <TableCell >{data.meterType}</TableCell>

                                                                    <TableCell >
                                                                        <IconButton aria-label="correct" color="error" onClick={() => { delmet(data._id) }} >
                                                                            <DeleteForeverTwoTone />
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
                        status === 4 &&
                        <Box justifyContent='center' alignItems='center' display='flex' m="40px auto" sx={{ backgroundColor: colors.primary[400], width: "50%", borderRadius: "23px" }}>
                            <Formik initialValues={cer} validationSchema={validationcertificate}  onSubmit={subcer}>
                                {(props) => (
                                    <Form>
                                        <Typography variant="h2" mt="5px" color="initial">Add Certificate Type </Typography>
                                        <Field as={TextField}

                                            sx={styles.textfield}
                                            name="certificateType"
                                            label="Add Certificate Type"
                                            variant='standard'
                                            type="text"
                                            color='secondary'
                                            placeholder='Enter Complaint Type..'
                                            InputLabelProps={{ style: { fontSize: 20 } }}
                                            InputProps={{
                                                startAdornment: (<InputAdornment position="start"> <SpeakerNotesTwoTone color='secondary' /></InputAdornment>)
                                            }}

                                        />
                                        <Typography variant="subtitle2" color="crimson">{<ErrorMessage name='certificateType' />}</Typography>
                                        <Button type="submit" sx={styles.btn} variant="contained" color="secondary" startIcon={<AddCircleOutlineTwoTone />} >Add</Button>
                                        <Box mt="10px" mb="20px">
                                            <TableContainer >
                                                <Table size="medium" >
                                                    <TableHead sx={{ backgroundColor: colors.greenAccent[700] }}>
                                                        <TableRow>
                                                            <TableCell>Name</TableCell>
                                                            <TableCell>Delete</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody sx={{ backgroundColor: colors.grey[600] }}>

                                                        {getcercat <= 0 ? <TableRow>
                                                            <TableCell colSpan={2}>
                                                                <Typography sx={{ margin: "10px auto", width: "10rem" }} variant="h2" color="primary">No Certificate Type Added</Typography>
                                                            </TableCell>
                                                        </TableRow>
                                                            :
                                                            getcercat?.map((data) => (
                                                                <TableRow key={data._id}>
                                                                    <TableCell >{data.certificateType}</TableCell>

                                                                    <TableCell >
                                                                        <IconButton aria-label="correct" color="error" onClick={() => { delcer(data._id) }} >
                                                                            <DeleteForeverTwoTone />
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
                </Box>
            </main>
        </div>
    )
}

export default Categories