import axiosInstance from "@/lib/axios"
import type {
  ApiResponse,
  AuthResponse,
  LoginData,
  RegisterData,
  User,
} from "@/types/api"

const AUTH_ENDPOINTS = {
  LOGIN: "/user/login",
  REGISTER: "/user/register",
  CURRENT_USER: "/user/auth",
  LOGOUT: "/user/logout",
  GOOGLE: "/user/google",
}

const getPayload = <T>(response: ApiResponse<T>): T => response.metadata ?? response.data!

export const authService = {
  async login(data: LoginData): Promise<AuthResponse> {
    const response = await axiosInstance.post<ApiResponse<AuthResponse>>(
      AUTH_ENDPOINTS.LOGIN,
      data
    )

    return getPayload(response.data)
  },

  async register(data: RegisterData): Promise<AuthResponse> {
    const response = await axiosInstance.post<ApiResponse<AuthResponse>>(
      AUTH_ENDPOINTS.REGISTER,
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

  loginWithGoogle(): void {
    const baseUrl =
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"

    window.location.href = `${baseUrl}${AUTH_ENDPOINTS.GOOGLE}`
  },
}

export default authService
