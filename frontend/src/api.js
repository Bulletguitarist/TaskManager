import axios from "axios";

const API = axios.create({
  baseURL: "baseURL: https://taskmanager-2-igpt.onrender.com/api"
});

API.interceptors.request.use(req => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = token;
  return req;
});

export default API;
