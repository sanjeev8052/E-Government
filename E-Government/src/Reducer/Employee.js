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

});