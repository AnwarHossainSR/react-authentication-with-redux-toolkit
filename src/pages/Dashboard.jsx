import React from "react";
import { useDispatch } from "react-redux";
import { authLogout } from "../redux/reducers/LoginSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.clear();
    dispatch(authLogout());
  };
  return (
    <div>
      <ul>
        <li>Name :</li>
        <li>Email :</li>
        <li onClick={handleLogout}>Logout :</li>
      </ul>
    </div>
  );
};

export default Dashboard;
