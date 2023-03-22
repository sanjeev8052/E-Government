import { Box, FormControl, FormControlLabel, Radio, RadioGroup, Typography, TextField, Button, InputAdornment } from '@material-ui/core'
import { Close, GasMeter, Home, Payment } from '@mui/icons-material'
import GasBillImage from '../../../Images/gas.png'
import electrBilliImage from '../../../Images/electricity.png'
import waterBillImage from '../../../Images/download.png'
import React, { useEffect, useState } from 'react'
import './BillPayment.css'
import { useFormik, validateYupSchema } from 'formik'
import { billPaySchema } from '../../../ValidateSchema/Services'
import axios from 'axios'
import Footer from '../../Layout/Footer/Footer'
import { useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { useNavigate } from 'react-router-dom'


const BillPay = () => {
  const  navigate = useNavigate()
  const {isAuthenticated } = useSelector(state=>state.user)

  useEffect(()=>{
    isAuthenticated ? console.log(true)  : navigate('../login')
  },[])

   


 
  const { userData } = useSelector(state => state.user)
  const alert = useAlert()
  const [billType, setStatus] = useState("Gas")
  const [billData, setBillData] = useState()
  const [error, setError] = useState()
  const handler = (billType) => {
    setStatus(billType)
  }

  const initialValues = {}
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validateYupSchema: billPaySchema,

    onSubmit: async (values) => {
      try {
        const { data } = await axios.post('api/admin/searchbills', { tno: values.tenamentNo, billType })
        data ? setBillData(data[0]) : null
        setError(null)
      } catch (error) {
        setError(error.response.data.message)
        setBillData(null)
      }

    }

  })

  const handlePayment = async () => {
    try {
      const { data } = await axios.post('api/admin/paybills', { bid: billData._id, uid: userData._id })
      data ? alert.success(data.message) : null
      data ? setBillData(null) : null
    } catch (error) {

    }
  }

 


  return (
    <Box className='box'>
      <form className='form' onSubmit={handleSubmit}>
        <div className="row">
          {!billData &&
            <FormControl>
              <RadioGroup row aria-label="categories" defaultValue={billType ? billType : "Gas"} name='categories group'>
                <div className="col-4">
                  <img src={GasBillImage} alt="" />
                  <FormControlLabel value='Gas' label={<Typography variant="h6" >  Gas  BillPayment</Typography>} control={<Radio onClick={(e) => handler(e.target.value)} />}  ></FormControlLabel>

                </div>
                <div className="col-4">
                  <img src={electrBilliImage} alt="" />
                  <FormControlLabel value='Electricity' label={<Typography variant="h6" >Electric BillPayment</Typography>} control={<Radio onClick={(e) => handler(e.target.value)} />}></FormControlLabel>

                </div>
                <div className="col-4">
                  <img src={waterBillImage} alt="" />
                  <FormControlLabel value='Water' label={<Typography variant="h6" > Water BillPayment</Typography>} control={<Radio onClick={(e) => handler(e.target.value)} />}></FormControlLabel>

                </div>


              </RadioGroup>
            </FormControl>

          }

          <div className="col-12">
            <div style={{ display: "flex" }}>
              <h2>{billType} Bill Payment</h2> {billData && <Close onClick={()=>setBillData(null)} sx={{ marginLeft: "auto" }} />}
            </div>

            {!billData && <>
              <br /><br />
              <TextField sx={{ marginTop: "2rem" }}
                fullWidth
                id=""
                label=""
                size='small'
                name='tenamentNo'
                variant='outlined'
                onChange={handleChange}
                placeholder='Enter Tenament No.'
                InputProps={{ startAdornment: (<InputAdornment position="start"> <Home /></InputAdornment>) }}
                required
                type='number'
              />
              .
              <Button variant="contained" type='submit' fullWidth color="primary">
                Check Payment
              </Button>
            </>}

          </div>
          {error &&
            <div className="col-12">
              <Typography variant="h6" color="initial">{error}</Typography>
            </div>
          }
          {billData &&
            <div className='col-12'>


              <div className='row'>
                <div className="col-sm-5">
                  <Typography variant="h6" color="initial">Tenament No</Typography><hr />
                  <Typography variant="h6" color="initial">Area Name</Typography><hr />
                  <Typography variant="h6" color="initial">Customenr Name </Typography><hr />
                  <Typography variant="h6" color="initial">Bill</Typography><hr />
                  <Typography variant="h6" color="initial">Bill Date</Typography><hr />
                  <Typography variant="h6" color="initial">Last Due Date</Typography><hr />
                  <Typography variant="h6" color="initial">Past Due Amount</Typography><hr />
                  <Typography variant="h6" color="initial">Amout</Typography>


                </div>
                <div className="col-sm-5">
                  <Typography variant="h6" color="initial">{billData.tenamentNo}</Typography><hr />
                  <Typography variant="h6" color="initial">{billData.area}</Typography><hr />
                  <Typography variant="h6" color="initial">{billData.ownerName}</Typography><hr />
                  <Typography variant="h6" color="initial">{billData.billType}</Typography><hr />
                  <Typography variant="h6" color="initial">{billData.addDate}</Typography><hr />
                  <Typography variant="h6" color="initial">{billData.lastDueDate}</Typography><hr />
                  <Typography variant="h6" color="initial">{billData.pastDueAmt}</Typography><hr />
                  <Typography variant="h6" color="initial">{billData.amount}</Typography>
                </div>
                <div className='col-10'>
                  <hr />
                  <div className="row">
                    <div className='col-6'>
                      <Typography variant="h6" color="initial">Total Amount : {billData.totelAmt}</Typography>

                    </div>
                    <div className='col-6'>
                      <Button variant="contained" onClick={handlePayment} color="primary">
                        Pay Now
                      </Button>
                    </div><br /><br />
                    <hr />
                  </div>
                </div>
              </div>

            </div>
          }

        </div>
      </form>
      <Footer />
    </Box>
  )
}

export default BillPay
