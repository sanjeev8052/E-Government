import axios from 'axios'

export const getCompReq = () => async (dispatch) => {
    try {
        dispatch({
            type: "getCompReqRequset",
        })

        const { data } = await axios.post("api/comp/req", {
            headers: {
                "Content-Type": "application/json"
            }
        })

        dispatch({
            type: "getCompReqSuccess",
            payload: data.message
        })

    } catch (error) {
        dispatch({
            type: "getCompReqFailuer",
            payload: error
        })
    }
}