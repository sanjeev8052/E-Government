import axios from "axios"

export const Addcomcat  = (complaintType) => async (dispatch) =>{
    try {
        dispatch({
            type: "addcomcatRequset"
        })
        const {data} = await axios.post(`/api/admin/addcomplaintcat`, complaintType)

        dispatch({
            type: "addcomcatSuccess",
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: "addcomcatFailuer",
            payload: error
        })
    }
}

export const Getcomcat  = () => async (dispatch) =>{
    try {
        dispatch({
            type: "getcomcatRequset"
        })
        const {data} = await axios.get(`/api/admin/getcomplaintcat`)

        dispatch({
            type: "getcomcatSuccess",
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: "getcomcatFailuer",
            payload: error
        })
    }
}

export const Delcomcat  = (id) => async (dispatch) =>{
    try {
        dispatch({
            type: "delcomcatRequset"
        })
        const {data} = await axios.delete(`/api/admin/deletecomplaintcat/${id}`)

        dispatch({
            type: "delcomcatSuccess",
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: "delcomcatFailuer",
            payload: error
        })
    }
}

