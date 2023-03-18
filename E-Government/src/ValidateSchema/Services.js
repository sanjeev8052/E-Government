import * as yup from 'yup'

export const complaintSchema = yup.object({
    complaintType: yup.string().required("Please select Any Type....... "),
    city: yup.string().required("Please Enter Your City....... "),
    streetAddress: yup.string().required("Please Enter Your Street Address...... "),
    area: yup.string().required("Please Enter Your Area Nmae....... "),
    pincode: yup.string().min(6).required("Please Enter Your zip No.... "),
    complaintDesc: yup.string().min(10).required("Please Enter Your Description..... "),
})
export const meterSchema = yup.object({
    name: yup.string().min(3).required("Please Enter your name."),
    email: yup.string().email().matches(/^(?!.*@[^,]*,)/).required("Please Enter Your Email.."),
    phone : yup.number().min(10,'phone no not valid').max(10,'phone no not valid'),
    complaintType: yup.string().required("Please select Any Type....... "),
    city: yup.string().required("Please Enter Your City....... "),
    streetAddress: yup.string().required("Please Enter Your Street Address...... "),
    area: yup.string().required("Please Enter Your Area Nmae....... "),
    pincode: yup.string().min(6).required("Please Enter Your zip No.... "),
    complaintDesc: yup.string().min(10).required("Please Enter Your Description..... "),
})

export const billPaySchema = yup.object({
tenament_No: yup.number().min(1000000000,['Phone no is not valid']).max(9999999999,['Phone no is not valid']).required(),
})
