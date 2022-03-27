import axios from "axios";

export const userLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post("api/v1/login", {
        email,
        password,
      });
      if (res.status === 200) {
        sessionStorage.setItem("token", res.data.token);
        localStorage.setItem("token", res.data.token);
      }
      resolve(res.data);
    } catch (error) {
      console.log(error);
      reject(error.response.data);
    }
  });
};

export const userLogout = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get("api/v1/logout", {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      });
      localStorage.clear();
      sessionStorage.clear();
      resolve(res.data);
    } catch (error) {
      reject(error.response.data);
    }
  });
};

export const getUserData = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get("api/v1/me");
      resolve(res.data);
    } catch (error) {
      console.log(error.response);
      reject(error.response.data);
    }
  });
};
