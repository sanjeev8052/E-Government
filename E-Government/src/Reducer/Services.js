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
    // get complaint request
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

    // get accpeted complaint request
    getAccComRequset: (state) => {
        state.loading = true;
    },
    getAccComSuccess: (state, action) => {
        state.loading = false;
        state.getAccReq = action.payload;

    },
    getAccComFailuer: (state, action) => {
        state.loading = false;
        state.LoginError = action.payload;

    },
    // For Load Compllaint
    laodComRequset: (state) => {
        state.loading = true;
    },
    laodComSuccess: (state, action) => {
        state.loading = false;
        state.loadcom = action.payload;

    },
    laodComFailuer: (state, action) => {
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
        state.error = action.payload;

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
        state.error = action.payload;

    },
    // for add bills category
    addbillcatRequset: (state) => {
        state.loading = true;
    },
    addbillcatSuccess: (state, action) => {
        state.loading = false;
        state.billcat = action.payload;

    },
    addbillcatFailuer: (state, action) => {
        state.loading = false;
        state.error = action.payload;

    },

    // for get bills category
    getbillcatRequset: (state) => {
        state.loading = true;
    },
    getbillcatSuccess: (state, action) => {
        state.loading = false;
        state.getbillcat = action.payload;

    },
    getbillcatFailuer: (state, action) => {
        state.loading = false;
        state.error = action.payload;

    },

    // for delete bills category
    delbillcatRequset: (state) => {
        state.loading = true;
    },
    delbillcatSuccess: (state, action) => {
        state.loading = false;
        state.delbillcat = action.payload;

    },
    delbillcatFailuer: (state, action) => {
        state.loading = false;
        state.error = action.payload;

    },
    // for add meter category
    addmetercatRequset: (state) => {
        state.loading = true;
    },
    addemetercatSuccess: (state, action) => {
        state.loading = false;
        state.metercat = action.payload;

    },
    addmetercatFailuer: (state, action) => {
        state.loading = false;
        state.error = action.payload;

    },

    // for get meter category
    getmetercatRequset: (state) => {
        state.loading = true;
    },
    getmetercatSuccess: (state, action) => {
        state.loading = false;
        state.getmetercat = action.payload;

    },
    getmetercatFailuer: (state, action) => {
        state.loading = false;
        state.error = action.payload;

    },

    // for delete meter category
    delmetercatRequset: (state) => {
        state.loading = true;
    },
    delmetercatSuccess: (state, action) => {
        state.loading = false;
        state.delmetercat = action.payload;

    },
    delmetercatFailuer: (state, action) => {
        state.loading = false;
        state.error = action.payload;

    },
    // for add certificate category
    addcercatRequset: (state) => {
        state.loading = true;
    },
    addcercatSuccess: (state, action) => {
        state.loading = false;
        state.cercat = action.payload;

    },
    addcercatFailuer: (state, action) => {
        state.loading = false;
        state.error = action.payload;

    },

    // for get certificate category
    getcercatRequset: (state) => {
        state.loading = true;
    },
    getcercatSuccess: (state, action) => {
        state.loading = false;
        state.getcercat = action.payload;

    },
    getcercatFailuer: (state, action) => {
        state.loading = false;
        state.error = action.payload;

    },

    // for delete certificate category
    delcercatRequset: (state) => {
        state.loading = true;
    },
    delcercatSuccess: (state, action) => {
        state.loading = false;
        state.delcercat = action.payload;

    },
    delcercatFailuer: (state, action) => {
        state.loading = false;
        state.error = action.payload;

    },

    

})
