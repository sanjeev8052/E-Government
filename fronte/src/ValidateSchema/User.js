import * as yup from 'yup'

export const signUpSchema = yup.object({
    email: yup.string().email().matches(/^(?!.*@[^,]*,)/).required("Please Enter Your Email.."),
    password: yup.string().min(6).required("Please Enter Your Password "),
})