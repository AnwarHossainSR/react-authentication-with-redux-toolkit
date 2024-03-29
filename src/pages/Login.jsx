import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLoginAction } from "../redux/actions/LoginAction";
import "./Login.scss";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, error, isAuth } = useSelector((state) => state.login);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(userLoginAction(email, password));
  };
  useEffect(() => {
    if (isAuth) navigate("/dashboard");
  }, [isAuth, navigate]);

  return (
    <div className="align">
      <div className="grid align__item">
        <div className="register">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="site__logo"
            width={56}
            height={84}
            viewBox="77.7 214.9 274.7 412"
          >
            <defs>
              <linearGradient id="a" x1="0%" y1="0%" y2="0%">
                <stop offset="0%" stopColor="#8ceabb" />
                <stop offset="100%" stopColor="#378f7b" />
              </linearGradient>
            </defs>
            <path
              fill="url(#a)"
              d="M215 214.9c-83.6 123.5-137.3 200.8-137.3 275.9 0 75.2 61.4 136.1 137.3 136.1s137.3-60.9 137.3-136.1c0-75.1-53.7-152.4-137.3-275.9z"
            />
          </svg>
          <h2>Login</h2>
          <p className="error">{error && error}</p>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form__field">
              <input
                type="email"
                placeholder="info@mailaddress.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form__field">
              <input
                type="password"
                placeholder="••••••••••••"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form__field">
              <input type="submit" value={isLoading ? "loading.." : "Login"} />
            </div>
          </form>
          <p>
            Already have an accout? <Link to="">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
