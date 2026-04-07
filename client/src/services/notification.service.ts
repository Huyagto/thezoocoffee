import axiosInstance from '@/lib/axios';
import type { ApiResponse, Notification } from '@/types/api';

const getPayload = <T>(response: ApiResponse<T>): T => response.metadata ?? response.data!;

const notificationService = {
  async getMyNotifications(): Promise<Notification[]> {
    const response = await axiosInstance.get<ApiResponse<Notification[]>>('/user/notifications')
    return getPayload(response.data)
  },

  async markAsRead(id: number): Promise<Notification> {
    const response = await axiosInstance.patch<ApiResponse<Notification>>(
      `/user/notifications/${id}/read`
    )
    return getPayload(response.data)
  },
}

export default notificationService
