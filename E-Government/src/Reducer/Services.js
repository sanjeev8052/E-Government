import { createReducer } from '@reduxjs/toolkit'

const initialState = {


}

export const userServicesReducer = createReducer(initialState, {

    // getCompreq Reducers........
    getCompReqRequset: (state) => {
        state.loading = true;
    },
    getCompReqSuccess: (state, action) => {
        state.loading = false;
        state.getComReq = action.payload;
       
    },
    getCompReqFailuer: (state, action) => {
        state.loading = false;
        state.LoginError = action.payload;
       
    },


})
