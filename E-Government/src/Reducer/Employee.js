import { createReducer } from "@reduxjs/toolkit";

const initialState = {}

export const Employee = createReducer(initialState, {

    // For Register
    employeeRegRequest: (state) => {
        state.loading = true;
    },
    employeeRegSuccess: (state, action) => {
        state.loading = false;
        state.reg = action.payload;

    },
    employeeRegFailuer: (state, action) => {
        state.loading = false;
        state.error = action.payload;

    },
    // For Login
    employeeLoginRequest: (state) => {
        state.loading = true;
    },
    employeeLoginSuccess: (state, action) => {
        state.loading = false;
        state.log = action.payload;

    },
    employeeLoginFailuer: (state, action) => {
        state.loading = false;
        state.error = action.payload;

    },
    // For Login
    GetEMppRequest: (state) => {
        state.loading = true;
    },
    GetEMppSuccess: (state, action) => {
        state.loading = false;
        state.getEmpData = action.payload;

    },
    GetEMppFailuer: (state, action) => {
        state.loading = false;
        state.error = action.payload;

    },

});