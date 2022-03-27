import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authLogout } from "../redux/reducers/LoginSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.login);
  const handleLogout = () => {
    localStorage.clear();
    dispatch(authLogout());
  };

  return (
    <div>
      <ul>
        <li>Name :{user && user.name}</li>
        <li>Email :{user && user.email}</li>
        <li onClick={handleLogout}>Logout</li>
      </ul>
    </div>
  );
};

export default Dashboard;
