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

    // for add complaint category
    addcomcatRequset: (state) => {
        state.loading = true;
    },
    addcomcatSuccess: (state, action) => {
        state.loading = false;
        state.comcat = action.payload;

    },
    addcomcatFailuer: (state, action) => {
        state.loading = false;
        state.LoginError = action.payload;

    },

    // for get complaint category
    getcomcatRequset: (state) => {
        state.loading = true;
    },
    getcomcatSuccess: (state, action) => {
        state.loading = false;
        state.getcomcat = action.payload;

    },
    getcomcatFailuer: (state, action) => {
        state.loading = false;
        state.LoginError = action.payload;

    },

    // for get complaint category
    delcomcatRequset: (state) => {
        state.loading = true;
    },
    delcomcatSuccess: (state, action) => {
        state.loading = false;
        state.delcomcat = action.payload;

    },
    delcomcatFailuer: (state, action) => {
        state.loading = false;
        state.LoginError = action.payload;

    },

    

})
