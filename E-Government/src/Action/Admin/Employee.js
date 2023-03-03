import axios from "axios"

export const getTempEmp = () => async (dispatch) =>{
    try {
        dispatch({
            type: "TempEmployeeRequest"
        })
        const response = await axios.get(`/api/admin/gettempemp`)

        dispatch({
            type: "TempEmployeeSuccess",
            payload: response
        })
        
    } catch (error) {
        dispatch({
            type: "TempEmployeeFailure",
            payload: error
        })
    }
}
export const conTempEmp = (id) => async (dispatch) =>{
    try {
        dispatch({
            type: "CEmployeeRequest"
        })
        const response = await axios.post(`/api/admin/employee/${id}`)

        dispatch({
            type: "CEmployeeSuccess",
            payload: response
        })
        
    } catch (error) {
        dispatch({
            type: "CEmployeeFailure",
            payload: error
        })
    }
}
export const getEmp = () => async (dispatch) =>{
    try {
        dispatch({
            type: "EmployeeRequest"
        })
        const response = await axios.get(`/api/admin/getemp`)

        dispatch({
            type: "EmployeeSuccess",
            payload: response
        })
    } catch (error) {
        dispatch({
            type: "EmployeeFailure",
            payload: error
        })
    }
}
export const blockEmp = (id) => async (dispatch) =>{
    try {
        dispatch({
            type: "BlockRequest"
        })
        const response = await axios.post(`/api/admin/blockemp/${id}`)

        dispatch({
            type: "BlockSuccess",
            payload: response
        })
    } catch (error) {
        dispatch({
            type: "BlockFailure",
            payload: error
        })
    }
}