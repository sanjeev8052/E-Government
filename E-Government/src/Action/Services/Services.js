import axios from 'axios'


// For Complaint
export const CompReq = (user,values) => async (dispatch) => {
    try {
        dispatch({
            type: "CompReqRequset",
        })

        const { data } = await axios.post("api/comp/req",{values,user},{
            headers: {
                "Content-Type": "application/json"
            }
        })

        dispatch({
            type: "CompReqSuccess",
            payload: data
        })

    } catch (error) {
        dispatch({
            type: "CompReqFailuer",
            payload: error
        })
    }
}

export const getCompReq = () => async (dispatch) => {
    try {
        dispatch({
            type: "getCompReqRequset",
        })

        const { data } = await axios.get("api/admin/getComp/req", {
            headers: {
                "Content-Type": "application/json"
            }
        })

        dispatch({
            type: "getCompReqSuccess",
            payload: data
        })

    } catch (error) {
        dispatch({
            type: "getCompReqFailuer",
            payload: error
        })
    }
}
export const accCompReq = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "AcceptCompReqRequset",
        })

        const { data } = await axios.post(`api/admin/acceptcomplaint/${id}`, {
            headers: {
                "Content-Type": "application/json"
            }
        })

        dispatch({
            type: "AcceptCompReqSuccess",
            payload: data
        })

        dispatch(getCompReq())
    } catch (error) {
        dispatch({
            type: "AcceptCompReqFailuer",
            payload: error
        })
    }
}

export const getAccCom = () => async (dispatch) => {
    try {
        dispatch({
            type: "getAccComRequset",
        })

        const { data } = await axios.get("api/admin/acceptedcom", {
            headers: {
                "Content-Type": "application/json"
            }
        })

        dispatch({
            type: "getAccComSuccess",
            payload: data
        })

    } catch (error) {
        dispatch({
            type: "getAccComFailuer",
            payload: error
        })
    }
}


export const loadCom = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "laodComRequset",
        })

        const { data } = await axios.get(`/api/admin/compdata/${id}`, {
            headers: {
                "Content-Type": "application/json"
            }
        })

        dispatch({
            type: "laodComSuccess",
            payload: data
        })

    } catch (error) {
        dispatch({
            type: "laodComFailuer",
            payload: error
        })
    }
}
export const rejCompReq = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "RejectCompReqRequset",
        })

        const { data } = await axios.delete(`api/admin/rejectcomplaint/${id}`, {
            headers: {
                "Content-Type": "application/json"
            }
        })

        dispatch({
            type: "RejectCompReqSuccess",
            payload: data
        })

        dispatch(getCompReq())
    } catch (error) {
        dispatch({
            type: "RejectCompReqFailuer",
            payload: error
        })
    }
}

// For Get  Meter Apply Req
export const getMeterApplyReq = () => async (dispatch) => {
    try {
        dispatch({
            type: "getMeterReqRequset",
        })

        const { data } = await axios.get("api/getmeterreq", {
            headers: {
                "Content-Type": "application/json"
            }
        })

        dispatch({
            type: "getMeterReqSuccess",
            payload: data
        })

    } catch (error) {
        dispatch({
            type: "getMeterReqFailuer",
            payload: error
        })
    }
}

export const accMeterReq = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "acceptMeterReqRequset",
        })

        const { data } = await axios.post(`api/accmeterreq/${id}`, {
            headers: {
                "Content-Type": "application/json"
            }
        })

        dispatch({
            type: "acceptMeterReqSuccess",
            payload: data
        })

        dispatch(getMeterApplyReq())
    } catch (error) {
        dispatch({
            type: "acceptMeterReqFailuer",
            payload: error
        })
    }
}

export const rejMeterReq = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "rejectMeterReqRequset",
        })

        const { data } = await axios.delete(`api/rejmeterreq/${id}`, {
            headers: {
                "Content-Type": "application/json"
            }
        })

        dispatch({
            type: "rejectMeterReqSuccess",
            payload: data
        })

        dispatch(getMeterApplyReq())
    } catch (error) {
        dispatch({
            type: "rejectMeterReqFailuer",
            payload: error
        })
    }
}

export const getAcceptMeterReq = () => async (dispatch) => {
    try {
        dispatch({
            type: "getAccMeterReqRequset",
        })

        const { data } = await axios.get("api/getaccmeterreq", {
            headers: {
                "Content-Type": "application/json"
            }
        })

        dispatch({
            type: "getAccMeterReqSuccess",
            payload: data
        })
      
    } catch (error) {
        dispatch({
            type: "getAccMeterReqFailuer",
            payload: error
        })
    }
}


