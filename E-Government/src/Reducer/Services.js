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

// Accept Complaint Request
    AcceptCompReqRequset: (state) => {
        state.loading = true;
    },
    AcceptCompReqSuccess: (state, action) => {
        state.loading = false;
        state.accComReq = action.payload;
       
    },
    AcceptCompReqFailuer: (state, action) => {
        state.loading = false;
        state.LoginError = action.payload;
       
    },
// Reject Complaint Request
    RejectCompReqRequset: (state) => {
        state.loading = true;
    },
    RejectCompReqSuccess: (state, action) => {
        state.loading = false;
        state.rejComReq = action.payload;
       
    },
    RejectCompReqFailuer: (state, action) => {
        state.loading = false;
        state.LoginError = action.payload;
       
    },


})
