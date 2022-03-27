import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./reducers/LoginSlice";
import UserReducer from "./reducers/UserSlice";

export default configureStore({
  reducer: {
    login: LoginReducer,
    user: UserReducer,
  },
});
