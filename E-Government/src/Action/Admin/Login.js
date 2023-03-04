import axios from "axios"

export const adminLogin = (admin) => async (dispatch) => {
    try {

        dispatch({
            type: "LoginRequest"
        })
        const response = await axios.post(`/api/admin/alogin`, admin, {
            headers: {
                "Content-Type": "application/json"
            }
        })

        dispatch({
            type: "LoginSuccess",
            payload: response.admin
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