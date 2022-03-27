import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getUserAction } from "../redux/actions/UserAction";
import { authSuccess } from "../redux/reducers/LoginSlice";

const PrivateRoutes = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.login);
  useEffect(() => {
    if (dispatch(getUserAction()) === true) {
      dispatch(authSuccess());
    }
  }, [dispatch]);

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};

export default PrivateRoutes;
