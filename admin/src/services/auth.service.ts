import axiosInstance from "@/lib/axios"
import type { ApiResponse, LoginData, User } from "@/types/api"

const AUTH_ENDPOINTS = {
  LOGIN: "/user/login",
  CURRENT_USER: "/user/auth",
  LOGOUT: "/user/logout",
}

const getPayload = <T>(response: ApiResponse<T>): T =>
  response.metadata ?? response.data!

const authService = {
  async login(data: LoginData): Promise<User> {
    const response = await axiosInstance.post<ApiResponse<User>>(
      AUTH_ENDPOINTS.LOGIN,
      data
    )

    return getPayload(response.data)
  },

  async getCurrentUser(): Promise<User> {
    const response = await axiosInstance.get<ApiResponse<User>>(
      AUTH_ENDPOINTS.CURRENT_USER,
      {
        skipAuthRedirect: true,
      } as never
    )

    return getPayload(response.data)
  },

  async logout(): Promise<void> {
    await axiosInstance.get(AUTH_ENDPOINTS.LOGOUT)
  },
}

export default authService
