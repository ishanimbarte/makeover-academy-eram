import axios from "axios";
import Cookies from "js-cookie";

const API = axios.create({
  baseURL: "https://eram-makeoverbackend-production.up.railway.app",
  withCredentials: true,
});

// Attach JWT token automatically
API.interceptors.request.use((req) => {
  // Try to get token from localStorage first, then fall back to cookies
  const token = Cookies.get("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

// ================= AUTH =================

export const signupUser = (data) => API.post("/auth/signup", data);

export const loginUser = async (data) => {
  const res = await API.post("/auth/login", data);

  if (res.data.token) {
    Cookies.set("token", res.data.token, { expires: 7 });
  }

  return res;
};

export const logoutUser = () => {
  Cookies.remove("token");
};

// ================= USER =================

export const getUserProfile = () => API.get("/user/profile");

// Contact API
export const sendContactMessage = (data) => API.post("/contact", data);

// ✅ Free Demo API
export const registerDemo = (data) => API.post("/demo/register", data);

// ================= COURSES =================

export const getAllCourses = () => API.get("/courses");

// ================= PROFILE =================

export const createOrUpdateProfile = (data) =>
  API.post("/api/profiles", data);

// ================= IMAGE UPLOAD =================

export const uploadImage = (formData) =>
  API.post("/api/images/upload", formData);

export default API;