import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getUserAction } from "../redux/actions/UserAction";
import { authSuccess } from "../redux/reducers/LoginSlice";

const PrivateRoutes = () => {
  const [loading, setloading] = useState(true);

  const location = useLocation();
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.login);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 100);
    dispatch(getUserAction()).then((res) => {
      res === true && dispatch(authSuccess());
    });
  }, [dispatch]);
  if (loading) return "Loading...";
  if (!isAuth) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }
  return <Outlet />;
};

export default PrivateRoutes;
