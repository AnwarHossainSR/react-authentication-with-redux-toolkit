import { userLogin, userLogout } from "../../api/userApi";
import {
  authFailure,
  authLogout,
  authPending,
  authSuccess,
} from "../reducers/LoginSlice";

export const userLoginAction = (email, password) => {
  return async (dispatch) => {
    dispatch(authPending());
    try {
      const res = await userLogin(email, password);
      if (res.success === true) {
        dispatch(authSuccess(res.user));
        return true;
      }
    } catch (error) {
      dispatch(authFailure(error.message));
    }
  };
};

export const userLogoutAction = () => {
  return async (dispatch) => {
    dispatch(authPending());
    try {
      const res = await userLogout();
      if (res.success === true) {
        dispatch(authLogout());
      }
    } catch (error) {
      dispatch(authFailure(error.message));
    }
  };
};
