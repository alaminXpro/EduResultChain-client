import axios, { CreateAxiosDefaults } from "axios";
import Cookies from "universal-cookie";

interface ApiError {
  code: number;
  message: string;
}

const cookies = new Cookies();

const getToken = () => {
  return cookies.get("token");
};

const baseConfig: CreateAxiosDefaults = {
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

export const instanceWithoutInterceptors = axios.create(baseConfig);
export const instance = axios.create(baseConfig);

instance.interceptors.request.use(
  function (config) {
    const token = getToken();
    if (!token) {
      return Promise.reject({
        code: 401,
        message: "Unauthorized - No token found",
      } as ApiError);
    }
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject({
      code: 500,
      message: error.message,
    } as ApiError);
  },
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response?.status === 401) {
      cookies.remove("token");
    }
    return Promise.reject({
      code: error.response?.status || 500,
      message: error.message,
    } as ApiError);
  },
);
