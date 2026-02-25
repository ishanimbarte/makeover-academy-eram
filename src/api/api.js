import axios from "axios";

const API = axios.create({
  baseURL: "https://eramclasses-backend-production.up.railway.app",
});

// Attach JWT token automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// ================= AUTH =================

export const signupUser = (data) => API.post("/auth/signup", data);
export const loginUser = (data) => API.post("/auth/login", data);

// Contact API
export const sendContactMessage = (data) => {
  return axios.post(`${BASE_URL}/contact`, data);
};

export default API;