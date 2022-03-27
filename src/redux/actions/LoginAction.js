import { userLogin } from "../../api/userApi";
import { authFailure, authPending, authSuccess } from "../reducers/LoginSlice";

export const userLoginAction = (email, password) => {
  return async (dispatch) => {
    dispatch(authPending());
    try {
      const res = await userLogin(email, password);
      if (res.success === true) {
        dispatch(authSuccess(res.user));
      }
    } catch (error) {
      dispatch(authFailure(error.message));
    }
  };
};
