import { createReducer } from '@reduxjs/toolkit'

const initialState = {


}

export const userServicesReducer = createReducer(initialState, {

    //Compreq Reducers........
    CompReqRequset: (state) => {
        state.loading = true;
    },
    CompReqSuccess: (state, action) => {
        state.loading = false;
        state.data = action.payload;
       
    },
    CompReqFailuer: (state, action) => {
        state.loading = false;
        state.LoginError = action.payload;
       
    },

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

    // for delete complaint category
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
    // for add bills category
    addcomcatRequset: (state) => {
        state.loading = true;
    },
    addcomcatSuccess: (state, action) => {
        state.loading = false;
        state.billcat = action.payload;

    },
    addcomcatFailuer: (state, action) => {
        state.loading = false;
        state.LoginError = action.payload;

    },

    // for get bills category
    getcomcatRequset: (state) => {
        state.loading = true;
    },
    getcomcatSuccess: (state, action) => {
        state.loading = false;
        state.getbillcat = action.payload;

    },
    getcomcatFailuer: (state, action) => {
        state.loading = false;
        state.LoginError = action.payload;

    },

    // for delete bills category
    delcomcatRequset: (state) => {
        state.loading = true;
    },
    delcomcatSuccess: (state, action) => {
        state.loading = false;
        state.delbillcat = action.payload;

    },
    delcomcatFailuer: (state, action) => {
        state.loading = false;
        state.LoginError = action.payload;

    },
    // for add meter category
    addcomcatRequset: (state) => {
        state.loading = true;
    },
    addcomcatSuccess: (state, action) => {
        state.loading = false;
        state.metercat = action.payload;

    },
    addcomcatFailuer: (state, action) => {
        state.loading = false;
        state.LoginError = action.payload;

    },

    // for get meter category
    getcomcatRequset: (state) => {
        state.loading = true;
    },
    getcomcatSuccess: (state, action) => {
        state.loading = false;
        state.getmetercat = action.payload;

    },
    getcomcatFailuer: (state, action) => {
        state.loading = false;
        state.LoginError = action.payload;

    },

    // for delete meter category
    delcomcatRequset: (state) => {
        state.loading = true;
    },
    delcomcatSuccess: (state, action) => {
        state.loading = false;
        state.delmetercat = action.payload;

    },
    delcomcatFailuer: (state, action) => {
        state.loading = false;
        state.LoginError = action.payload;

    },
    // for add certificate category
    addcomcatRequset: (state) => {
        state.loading = true;
    },
    addcomcatSuccess: (state, action) => {
        state.loading = false;
        state.cercat = action.payload;

    },
    addcomcatFailuer: (state, action) => {
        state.loading = false;
        state.LoginError = action.payload;

    },

    // for get certificate category
    getcomcatRequset: (state) => {
        state.loading = true;
    },
    getcomcatSuccess: (state, action) => {
        state.loading = false;
        state.getcercat = action.payload;

    },
    getcomcatFailuer: (state, action) => {
        state.loading = false;
        state.LoginError = action.payload;

    },

    // for delete certificate category
    delcomcatRequset: (state) => {
        state.loading = true;
    },
    delcomcatSuccess: (state, action) => {
        state.loading = false;
        state.delcercat = action.payload;

    },
    delcomcatFailuer: (state, action) => {
        state.loading = false;
        state.LoginError = action.payload;

    },

    

})
