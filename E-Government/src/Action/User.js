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
            payload: data.message
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

