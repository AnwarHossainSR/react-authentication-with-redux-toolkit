import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  user: {},
  error: "",
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userPending: (state) => {
      state.isLoading = true;
    },
    userSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.user = payload;
      state.error = "";
    },
    userFailure: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

const { reducer, actions } = UserSlice;
export const { userPending, userSuccess, userFailure } = actions;
export default reducer;
