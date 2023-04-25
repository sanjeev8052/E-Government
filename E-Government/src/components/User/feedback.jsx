import { makeStyles, CircularProgress, Typography, Button, } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Footer from '../Layout/Footer/Footer'
import { feedbackSchema } from '../../ValidateSchema/Services'
import { useFormik } from 'formik'
import { Send, Delete, Key } from '@mui/icons-material'
import axios from 'axios'
import { useAlert } from 'react-alert'


const useStyle = makeStyles({
    mainDiv: {
        width: "98.9vw",
        height: "50vh",
        paddingTop: "15rem",
        background: "linear-gradient(to top right ,rgb(48, 94, 234),rgb(214, 245, 214))",

    },
    formDiv: {
        width: "40%",
        backgroundColor: "white",
        margin: "auto",
        padding: "2rem",
        borderRadius: "4px",
        boxShadow: "3px 3px 6px"

    }
})


const feedback = () => {
    const [loading, setLoading] = useState(false);
    const [feedback, setFeedback] = useState();
    const [feedbacks, setFeedbacks] = useState();
    const [reload, setReload] = useState(false);
    const alert = useAlert();
    const initialvalues = {}

    const { values, touched, errors, handleBlur, handleChange, handleSubmit } = useFormik({

        initialValues: initialvalues,
        validationSchema: feedbackSchema,

        onSubmit: async (values) => {
            try {
                setLoading(true)
                const { data } = await axios.post('api/user/feedback', values)
                setLoading(false)
                getFeedback()
                getFeedbacks()
                data.message && alert.success(data.message)
            } catch (error) {
                setLoading(false)
                alert.success(error.response.data.message)
            }
        }
    })

    useEffect(() => {
        getFeedback()
        getFeedbacks()
    }, [reload]);

    const getFeedback = async () => {
        try {
            setLoading(true)
            const { data } = await axios.get('api/get/feedback', values)
            setLoading(false)
            setFeedback(data.feedback)
        } catch (error) {
            setLoading(false)

        }
        setReload(false)
    }
    const getFeedbacks = async () => {
        try {
            setLoading(true)
            const { data } = await axios.get('api/get/feedbacks', values)
            setLoading(false)
            setFeedbacks(data.feedbacks)

        } catch (error) {
            setLoading(false)

        }
    }
    const deleteFeedback = async (id) => {
        try {
            setLoading(true)
            const { data } = await axios.get(`api/delete/feedback/${id}` )
            setLoading(false)
            alert.success(data.message)
        } catch (error) {
            setLoading(false)

        }
    }
   
    const style = useStyle()
    return (
        <div className={style.mainDiv}>
            <form onSubmit={handleSubmit} className={style.formDiv}>
                <Typography variant="h4" color="initial">Give FeedBack</Typography>
                <textarea style={{ width: "100%", padding: "10px" }} fullWidth className=' mt-4 s'
                    id=""
                    label=""
                    variant='outlined'
                    name='feedback'
                    onChange={handleChange}
                />
                {errors.feedback ? (
                    <Typography className='text-danger' >{errors.feedback}</Typography>
                ) : null}
                <Button type='sumbmit' className='mt-3' fullWidth variant="contained" color="primary">
                    {loading ? <CircularProgress /> : <> Send <Send /></>}
                </Button>

            </form>
            <hr />
            <button onClick={() => setReload(true)} >reload</button>
            { feedback  ? 
                <>
                    <h1 className='mx-4 text-center'>Your Feedback </h1>
                    <hr />
                    {

                        feedback?.map((data) => (
                            <div Key={data._id}>
                                <Typography className='mx-4' variant="h6" color="initial">{data.name}</Typography>

                                <Typography className='mx-4' variant="body1" color="initial">{data.feedback}</Typography>
                                <Button onClick={()=>deleteFeedback(data._id)} variant="text" className="text-danger">
                                   {loading ? <CircularProgress/> : <Delete />}
                                </Button>
                            </div>
                        ))
                    }

                    <hr />
                </>
               : undefined 
            }
            <hr />
            <h1 className='text-center mx-4'>All Feedbacks </h1>
            <hr />
            {
                feedbacks?.map((data) => (
                    <>
                        <Typography className='mx-4' variant="h6" color="initial">{data.name}</Typography>
                        <Typography className='mx-4' variant="body1" color="initial">{data.feedback}</Typography>
                        <hr />
                    </>
                ))
            }
            <Footer />
        </div>
    )
}

export default feedback
