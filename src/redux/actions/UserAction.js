import { getUserData } from "../../api/userApi";
import { userFailure, userPending, userSuccess } from "../reducers/UserSlice";

export const getUserAction = () => {
  return async (dispatch) => {
    dispatch(userPending());
    try {
      const res = await getUserData();
      if (res.success === true) {
        dispatch(userSuccess(res.user));
        return true;
      }
    } catch (error) {
      dispatch(userFailure(error.message));
    }
  };
};
