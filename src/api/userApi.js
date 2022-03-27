import axios from "axios";

export const userLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post("http://localhost:4000/api/v1/login", {
        email,
        password,
      });
      resolve(res.data);
    } catch (error) {
      reject(error.response.data);
    }
  });
};
