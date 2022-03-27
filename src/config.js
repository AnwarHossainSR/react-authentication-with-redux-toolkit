import axios from "axios";

//const token = localStorage.getItem("token");
axios.defaults.baseURL = "http://localhost:4000/api/v1/";
//axios.defaults.headers.common = { Authorization: token };
axios.defaults.headers["Content-Type"] = "application/json";
export default axios;
