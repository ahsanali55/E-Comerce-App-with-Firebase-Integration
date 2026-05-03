import axios, { InternalAxiosRequestConfig } from "axios";


const API = axios.create({
   baseURL: import.meta.env.VITE_API_URL
});

// 🔐 Attach token to every request
API.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");

      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    }
  }, (error) => {
    return Promise.reject(error);
  });

export default API;