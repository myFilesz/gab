import axios from "axios";
import { getToken } from "./auth/authContext";

// const api = axios.create({
//   baseURL: 'https://stockchemists-backend.herokuapp.com'
// })
const api = axios.create({
  baseURL: 'http://localhost:3000'
})
api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
