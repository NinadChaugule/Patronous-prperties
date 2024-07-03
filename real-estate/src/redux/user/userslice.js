import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    error: null,
    loading: false,
};

const userslice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInSatrt: (state) =>{
            state.loading = true;
        },
        signInSuccess: (state,action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure: (state,action) => {
            state.error = action.payload;
            state.loading = false;
        },
        updateUserStart: (state) => {
            state.loading = true;
          },
        updateUserSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
          },
        updateUserFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
          },
          deleteUserStart: (state) => {
            state.loading = true;
          },
          deleteUserSuccess: (state) => {
            state.currentUser = null;
            state.loading = false;
            state.error = null;
          },
          deleteUserFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
          },
          signOutUserStart: (state) => {
            state.loading = true;
          },
        
    }
});

export const { signInSatrt, signInFailure, signInSuccess, updateUserFailure, updateUserStart,updateUserSuccess, deleteUserFailure, deleteUserStart, deleteUserSuccess, signOutUserStart} = userslice.actions;

export default userslice.reducer;