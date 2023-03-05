import axios from 'axios'

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