import * as yup from 'yup'

export const complaintSchema = yup.object({
    complaintType: yup.string().required("Please select Any Type....... "),
    city: yup.string().required("Please Enter Your City....... "),
    streetAddress: yup.string().required("Please Enter Your Street Address...... "),
    areaNmae: yup.string().required("Please Enter Your Area Nmae....... "),
    zipNo: yup.string().min(6).required("Please Enter Your zip No.... "),
    description: yup.string().min(10).required("Please Enter Your Description..... "),
})