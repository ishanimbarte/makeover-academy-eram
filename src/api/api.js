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

// ================= CONTACT =================

export const sendContactMessage = (data) =>
  API.post("/contact", data);

// ================= FREE DEMO =================

export const registerDemo = (data) =>
  API.post("/demo/register", data);

export default API;