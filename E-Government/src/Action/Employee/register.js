import axios from "axios"

export const Register = (details) => async (dispatch) => {
    try {
        dispatch({
            type: "employeeRegRequest"
        })
        const { data } = await axios.post(`/api/employee/tempemployee`, details)

        dispatch({
            type: "employeeRegSuccess",
            payload: data
        })
        dispatch(Getcomcat())

    } catch (error) {
        dispatch({
            type: "employeeRegFailuer",
            payload: error
        })
    }
}