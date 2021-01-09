import axios from "axios";

// const api = axios.create({
//   baseURL: 'https://stockchemists-backend.herokuapp.com'
// })
const api = axios.create({
  baseURL: 'http://localhost:38001'
})


export default api;
