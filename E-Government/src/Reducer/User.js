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
    ClearLoginMessage: (state) => {
        state.message = null;
        state.LoginError = null;
        
    },


    // Ragister Reducers........
    RagisterRequest: (state) => {
        state.loading = true;
    },
    RagisterSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
 
    },
    RagisterFailuer: (state, action) => {
        state.loading = false;
        state.regisetrError = action.payload;

    },
    ClearRegisterMessage: (state) => {
        state.message = null;
        state.regisetrError = null;
      
    },

    

    // UserLoad Reducers........
    UserLoadRequest: (state) => {
        state.userLoading = true;
    },
    UserLoadSuccess: (state, action) => {
        state.userLoading = false;
        state.userData = action.payload;
        state.isAuthenticated = true
    },
    UserLoadFailuer: (state, action) => {
        state.userLoading = false;
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

    ForgotPassRequest: (state) => {
        state.loading = true;
    },
    ForgotPassSuccess: (state, action) => {
        state.loading = false;
        state.data = action.payload
    },
    ForgotPassFailuer: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    UpdateProfileRequest: (state) => {
        state.loading = true;
    },
    UpdateProfileSuccess: (state, action) => {
        state.loading = false;
        state.editMessage = action.payload
    },
    UpdateProfileFailuer: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },


    LoadProfileImageRequest: (state) => {
        state.loading = true;
    },
    LoadProfileImageSuccess: (state, action) => {
        state.loading = false;
        state.profileImage = action.payload
    },
    LoadProfileImageFailuer: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        
    },
    UpdateImageRequest: (state) => {
        state.loading = true;
    },
    UpdateImageSuccess: (state, action) => {
        state.loading = false;
        state.data = action.payload
    },
    UpdateImageFailuer: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

})
