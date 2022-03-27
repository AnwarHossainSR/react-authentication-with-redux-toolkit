import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { authSuccess } from "../redux/reducers/LoginSlice";

const PrivateRoutes = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.login);
  const isLoggedIn = localStorage.getItem("token");
  if (isLoggedIn) {
    dispatch(authSuccess());
  }
  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};

export default PrivateRoutes;
