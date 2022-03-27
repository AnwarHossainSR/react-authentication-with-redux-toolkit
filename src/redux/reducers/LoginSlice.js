import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isAuth: false,
  error: "",
};

export const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    authPending: (state) => {
      state.isLoading = true;
    },
    authSuccess: (state) => {
      state.isLoading = false;
      state.isAuth = true;
      state.error = "";
    },
    authFailure: (state, action) => {
      state.isLoading = false;
      state.isAuth = false;
      state.error = action.payload;
    },
    authLogout: (state) => {
      state.isLoading = false;
      state.isAuth = false;
      state.error = "";
    },
  },
});

const { reducer, actions } = LoginSlice;
export const { authPending, authSuccess, authFailure, authLogout } = actions;
export default reducer;
