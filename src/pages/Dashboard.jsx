import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogoutAction } from "../redux/actions/LoginAction";
import { getUserAction } from "../redux/actions/UserAction";
import "./Dashboard.scss";
const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("called from dashboard");
    dispatch(userLogoutAction());
  };
  useEffect(() => {
    dispatch(getUserAction());
  }, [dispatch]);
  return (
    <div>
      <ul>
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/products")}>Products</li>
        <li onClick={handleLogout}>Logout</li>
      </ul>
    </div>
  );
};

export default Dashboard;
