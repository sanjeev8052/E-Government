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
    phone: yup.number().min(1000000000, ['phone no must have 10 digit']).max(9999999999, ['phone no must have 10 digit']).required(),
    meterType: yup.string().required("Please select Meter Type....... "),
    city: yup.string().required("Please Enter Your City....... "),
    streetAddress: yup.string().required("Please Enter Your Street Address...... "),
    area: yup.string().required("Please Enter Your Area Nmae....... "),
    pincodeNo: yup.string().min(6).required("Please Enter Your zip No.... "),
    tenament_No: yup.number().min(100000000000, ['Tenament no must have 12 digit']).max(999999999999, ['Tenament no must have 12 digit']).required(),

})

export const incomeValidation = yup.object({
    name: yup.string().min(3).required("Please Enter your name."),
    email: yup.string().email().matches(/^(?!.*@[^,]*,)/).required("Please Enter Your Email.."),
    phone: yup.number().min(1000000000, ['phone no must have 10 digit']).max(9999999999, ['phone no must have 10 digit']).required(),
    address: yup.string().required("Please Enter Address....... "),
    fatherName: yup.string().required("Please Enter Your Father Name....... "),
    motherName: yup.string().required("Please Enter Your Mother Name....... "),
    income:yup.number().required("Please Enter Income....... "),
})
export const castValidation = yup.object({
    name: yup.string().min(3).required("Please Enter your name."),
    email: yup.string().email().matches(/^(?!.*@[^,]*,)/).required("Please Enter Your Email.."),
    phone: yup.number().min(1000000000, ['phone no must have 10 digit']).max(9999999999, ['phone no must have 10 digit']).required(),
    address: yup.string().required("Please Enter Your Address....... "),
    fatherName: yup.string().required("Please Enter Your Father Name....... "),
    motherName: yup.string().required("Please Enter Your Mother Name....... "),
    cast:yup.string().required("Please Enter Your Cast....... "),
})

export const billPaySchema = yup.object({
    tenament_No: yup.number().min(100000000000, ['Tenament no must have 12 digit']).max(999999999999, ['Tenament no must have 12 digit']).required(),
})
export const downloadSchema = yup.object({
    certificateNo: yup.number().min(100000, ['Tenament no must have 6 digit']).max(999999, ['Tenament no must have 6 digit']).required(),
})
