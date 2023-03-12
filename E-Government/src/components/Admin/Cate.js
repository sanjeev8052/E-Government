import * as react from 'react'
import TextField from '@mui/material/TextField'
import { useFormik } from 'formik'
import { Box, Button, FormControl, FormControlLabel, Radio, RadioGroup, Typography, FormLabel, FormHelperText } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { Addbillcat, Addcomcat } from '../../Action/Admin/Categories'


const Cate = () => {

    const [status, setStatus] = react.useState(1)
    const handler = (status) => {
        setStatus(status)
    }
    const initialValues = {
        complaintType: "",
        billsType: ""
    }

    const dispatch = useDispatch()

    const { values, touched, errors, handleBlur, handleChange, handleSubmit } = useFormik({

        initialValues: initialValues,
        //     validationSchema: complaintSchema,

        onSubmit: (values) => {
            if (status === 1) {
                 dispatch(Addcomcat(values));
             
            }else if(status === 2){
                dispatch(Addbillcat(values))
             

            }
        }


    })
    return (
        <div>
            <Box justifyContent="center" alignItems="center" display="flex" mt="5px">
                <FormControl>
                    <RadioGroup row aria-label="categories" defaultValue="Complainttype" name='categories group'>

                        <FormControlLabel value='Complainttype' label={<Typography variant="h4" > Complaint Type</Typography>} control={<Radio onClick={(e) => handler(1)} />}  ></FormControlLabel>

                        <FormControlLabel value='billstype' label={<Typography variant="h4" > Bill Type</Typography>} control={<Radio onClick={(e) => handler(2)} />}></FormControlLabel>

                        <FormControlLabel value='meterype' label={<Typography variant="h4" > Meter Type</Typography>} control={<Radio onClick={(e) => handler(3)} />}></FormControlLabel>

                        <FormControlLabel value='certificatetype' label={<Typography variant="h4" > Certificate Type</Typography>} control={<Radio onClick={(e) => handler(4)} />}></FormControlLabel>

                    </RadioGroup>
                </FormControl>
            </Box>
            {status === 1 &&
                <form onSubmit={handleSubmit}>
                    <TextField
                        id=""
                        label=""
                        name='complaintType'
                        onChange={handleChange}
                    />
                    <Button type='submit'>
                        submit comp
                    </Button>
                </form>}
            {status === 2 &&
                <form onSubmit={handleSubmit}>
                    <TextField
                        id=""
                        label=""
                        name='billsType'
                        onChange={handleChange}
                    />
                    <Button type='submit'>
                        submit  bill
                    </Button>
                </form>}

        </div>
    )
}

export default Cate
