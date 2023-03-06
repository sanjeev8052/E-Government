import axios from "axios";
export const getUser = () => async (dispatch) =>{
    try {
        dispatch({
            type: "GetUserRequset"
        })
        const {data} = await axios.get(`/api/admin/getuser`)

        dispatch({
            type: "GetUserSuccess",
            payload: data
        })
       
        
    } catch (error) {
        dispatch({
            type: "GetUserFailure",
            payload: error
        })
    }
}
export const BLockUser = (id) => async (dispatch) =>{
    try {
        dispatch({
            type: "BlockUserRequset"
        })
        const {data} = await axios.post(`api/admin/blockuser/${id}`)

        dispatch({
            type: "BlockUserSuccess",
            payload: data
        })
       
        
    } catch (error) {
        dispatch({
            type: "BlockUserFailure",
            payload: error
        })
    }
}