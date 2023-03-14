import * as yup from 'yup'

export const signUpSchema = yup.object({
    email: yup.string().email().matches(/^(?!.*@[^,]*,)/).required("Please Enter Your Email.."),
    password: yup.string().min(6).required("Please Enter Your Password "),
})
export const forgotSchema = yup.object({
    email: yup.string().email().matches(/^(?!.*@[^,]*,)/).required("Please Enter Your Email.."),
})

export const ProfileSchema = yup.object({
    email: yup.string().email().matches(/^(?!.*@[^,]*,)/).required("Please Enter Your Email.."),
    name: yup.string().min().required("Please Enter Your Email.."),
    phone: yup.string().min(10).max(10).required("Please Enter Your Email.."),
})
