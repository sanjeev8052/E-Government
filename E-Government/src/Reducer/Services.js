import { createReducer } from '@reduxjs/toolkit'

const initialState = {


}

export const userServicesReducer = createReducer(initialState, {

    // Login Reducers........
    getCompReqRequset: (state) => {
        state.loading = true;
    },
    getCompReqSuccess: (state, action) => {
        state.loading = false;
        state.getComReq = action.payload;
        state.isAuthenticated = true
    },
    getCompReqFailuer: (state, action) => {
        state.loading = false;
        state.LoginError = action.payload;
        state.isAuthenticated = false
    },


})
