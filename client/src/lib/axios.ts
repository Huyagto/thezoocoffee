import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios"
import axios from "axios"

// Create axios instance with default config
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api",
  timeout: 15000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => config,
  (error: AxiosError) => Promise.reject(error)
)

// Response interceptor for handling errors
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  async (error: AxiosError) => {
    const shouldSkipAuthRedirect =
      (error.config as InternalAxiosRequestConfig & {
        skipAuthRedirect?: boolean
      } | null)?.skipAuthRedirect ?? false

    if (error.response?.status === 401 && typeof window !== "undefined") {
      const currentPath = window.location.pathname
      const isAuthPage =
        currentPath === "/login" || currentPath === "/register"

      if (!isAuthPage && !shouldSkipAuthRedirect) {
        window.location.href = "/login"
      }
    }

    const errorMessage =
      (error.response?.data as { message?: string })?.message ||
      error.message ||
      "An unexpected error occurred"

    return Promise.reject(new Error(errorMessage))
  }
)

export default axiosInstance
