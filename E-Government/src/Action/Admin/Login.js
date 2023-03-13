import axios from "axios"

export const adminLogin = (admin) => async (dispatch) => {
    try {

        dispatch({
            type: "LoginRequest"
        })
        const {data} = await axios.post(`/api/admin/alogin`, admin, {
            headers: {
                "Content-Type": "application/json"
            }
        })

        dispatch({
            type: "LoginSuccess",
            payload: data.token
        })

    } catch (error) {
        dispatch({
            type: "LoginFailure",
            payload: error
        })

    }
};
export const LoadAdmin = (admin) => async (dispatch) => {
    try {

        dispatch({
            type: "LoadRequest"
        })
        const {data} = await axios.get(`/api/admin/profile`, admin)

        dispatch({
            type: "LoadSuccess",
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: "LoadFailure",
            payload: error
        })

    }
};
export const AdminLogout = () => async (dispatch) => {
    try {

        dispatch({
            type: "AdminLogoutRequest"
        })
        await axios.get(`/api/admin/logout`)

        dispatch({
            type: "AdminLogoutSuccess",
           
        })

    } catch (error) {
        dispatch({
            type: "AdminLogoutFailuer",
            payload: error
        })

    }
};
