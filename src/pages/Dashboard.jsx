import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogoutAction } from "../redux/actions/LoginAction";
import { getUserAction } from "../redux/actions/UserAction";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const handleLogout = () => {
    console.log("called from dashboard");
    dispatch(userLogoutAction());
  };
  useEffect(() => {
    dispatch(getUserAction());
  }, [dispatch]);
  console.log(user);
  return (
    <div>
      <ul>
        <li>Name :</li>
        <li>Email :</li>
        <li onClick={handleLogout}>Logout</li>
      </ul>
    </div>
  );
};

export default Dashboard;
