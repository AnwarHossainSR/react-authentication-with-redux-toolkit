import axios from "axios";

export const userLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post("http://localhost:4000/api/v1/login", {
        email,
        password,
      });
      if (res.status === 200) {
        sessionStorage.setItem("token", res.data.token);
        localStorage.setItem("token", res.data.token);
      }
      resolve(res.data);
    } catch (error) {
      reject(error.response.data);
    }
  });
};

export const userLogout = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get("http://localhost:4000/api/v1/logout");
      resolve(res.data);
    } catch (error) {
      reject(error.response.data);
    }
  });
};
