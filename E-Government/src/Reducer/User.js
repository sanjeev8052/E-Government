import { createReducer } from '@reduxjs/toolkit'

const initialState = {


}

export const userReducer = createReducer(initialState, {

    // Login Reducers........
    LoginRequest: (state) => {
        state.loading = true;
    },
    LoginSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
        state.isAuthenticated = true
    },
    LoginFailuer: (state, action) => {
        state.loading = false;
        state.LoginError = action.payload;
        state.isAuthenticated = false
    },
    ClearMessage: (state) => {
        state.message = null;
        state.LoginError = null;
    },


    // Ragister Reducers........
    RagisterRequest: (state) => {
        state.loading = true;
    },
    RagisterSuccess: (state, action) => {
        state.loading = false;
        state.data = action.payload;

    },
    RagisterFailuer: (state, action) => {
        state.loading = false;
        state.error = action.payload;

    },

    // UserLoad Reducers........
    UserLoadRequest: (state) => {
        state.loading = true;
    },
    UserLoadSuccess: (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.isAuthenticated = true
    },
    UserLoadFailuer: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false
    },

    

    //logout User
    LogoutRequest: (state) => {
        state.loading = true;
    },
    LogoutSuccess: (state, action) => {
        state.loading = false;
        state.isAuthenticated = false
    },
    LogoutFailuer: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

})
