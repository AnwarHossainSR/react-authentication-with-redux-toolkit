import { userLogin, userLogout } from "../../api/userApi";
import { validate } from "../../utils/valid";
import {
  authFailure,
  authLogout,
  authPending,
  authSuccess,
} from "../reducers/LoginSlice";
import { userPending } from "../reducers/UserSlice";

export const userLoginAction = (email, password) => {
  return async (dispatch) => {
    dispatch(authPending());
    try {
      const isValid = validate(email, password);
      if (isValid === true) {
        const res = await userLogin(email, password);
        if (res.success === true) {
          dispatch(authSuccess());
          return true;
        }
      } else {
        dispatch(authFailure(isValid));
        return false;
      }
    } catch (error) {
      dispatch(authFailure(error.message));
    }
  };
};

export const userLogoutAction = () => {
  return async (dispatch) => {
    dispatch(userPending());
    try {
      console.log("called from action");
      const res = await userLogout();
      if (res.success === true) {
        dispatch(authLogout());
      }
    } catch (error) {
      dispatch(authFailure(error.message));
    }
  };
};
