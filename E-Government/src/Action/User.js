import axios from 'axios'

export const userLogin = (user) => async (dispatch) => {
    try {
        dispatch({
            type: "LoginRequest",
        })

        const { data } = await axios.post("api/user/login", user, {
            headers: {
                "Content-Type": "application/json"
            }
        })

        dispatch({
            type: "LoginSuccess",
            payload: data
        })

    } catch (error) {
        dispatch({
            type: "LoginFailuer",
            payload: error
        })
    }
}

export const userRegister = (user) => async (dispatch) => {
    try {
        dispatch({
            type: " RagisterRequest",
        })

        const { data } = await axios.post("api/user/new", user, {
            headers: {
                "Content-Type": "application/json"
            }
        })

        dispatch({
            type: " RagisterSuccess",
            payload: data
        })

    } catch (error) {
        dispatch({
            type: " RagisterFailuer",
            payload: error
        })
    }
}

export const LoadUser = () => async (dispatch) => {
    try {
        dispatch({
            type: "UserLoadRequest",
        })

        const { data } = await axios.get("api/me", {
            headers: {
                "Content-Type": "application/json"
            }
        })

        dispatch({
            type: "UserLoadSuccess",
            payload: data
        })

    } catch (error) {
        dispatch({
            type: "UserLoadFailuer",
            payload: error
        })
    }
}

export const LogoutUser = () => async (dispatch) => {

    try {
        dispatch({
            type: "LogoutRequest",
        })
                 axios.get("api/logout")

        dispatch({
            type: "LogoutSuccess",
        })
    } catch (error) {
        dispatch({
            type: "LogoutFailuer",
            payload: error
        })
    }



}
export const forgotPass = (values) => async (dispatch) => {

    try {
        dispatch({
            type: "ForgotPassRequest",
        })
             const {data}  = await  axios.post("api/forgot/password",values)

        dispatch({
            type: "ForgotPassSuccess",
            payload:data
        })
    } catch (error) {
        dispatch({
            type: "ForgotPassFailuer",
            payload: error
        })
    }



}
export const updateProfile = (user,id) => async (dispatch) => {

    try {
        dispatch({
            type: "UpdateProfileRequest",
        })
             const {data}  = await  axios.post(`api/update/profile/${id}`,user)

        dispatch({
            type: "UpdateProfileSuccess",
            payload:data
        })
    } catch (error) {
        dispatch({
            type: "UpdateProfileFailuer",
            payload: error
        })
    }



}
export const getProfileImage = () => async (dispatch) => {

    try {
        dispatch({
            type: "LoadProfileImageRequest",

        })
             const {data}  = await  axios.get(`api/profile/image`)

        dispatch({
            type: "LoadProfileImageSuccess",

            payload:data
        })
    } catch (error) {
        dispatch({
            type: "LoadProfileImageFailuer",

            payload: error
        })
    }



}
export const updateProfileImage = (formData) => async (dispatch) => {

    try {
        dispatch({
            type: "UpdateImageRequest",

        })
        const { data } = await axios.put('/api/upload/update', formData)

        dispatch({
            type: "UpdateImageSuccess",

            payload:data
        })

        dispatch(getProfileImage())
    } catch (error) {
        dispatch({
            type: "UpdateImageFailuer",
            payload: error
        })
    }



}

export const Getfeedback = () => async (dispatch) => {
     try {
        dispatch({
            type: "getFeedbackRequest",
        })
             const {data}  = await  axios.get(`api/getfeedback`)

        dispatch({
            type: "getFeedbackSuccess",
            payload:data
        })
    } catch (error) {
        dispatch({
            type: "getFeedbackFailuer",
            payload: error
        })
    }

}



