import axios from 'axios'

export const CompReq = (values) => async (dispatch) => {
    try {
        dispatch({
            type: "CompReqRequset",
        })

        const { data } = await axios.post("api/comp/req",values, {
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

    } catch (error) {
        dispatch({
            type: "AcceptCompReqFailuer",
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

    } catch (error) {
        dispatch({
            type: "RejectCompReqFailuer",
            payload: error
        })
    }
}