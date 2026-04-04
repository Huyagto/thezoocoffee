import axiosInstance from "@/lib/axios"
import type {
  ApiResponse,
  CheckoutData,
  Order,
  OrdersResponse,
} from "@/types/api"

const ORDER_ENDPOINTS = {
  CHECKOUT: "/orders/checkout",
  GET_ORDERS: "/orders",
  GET_ORDER_BY_ID: (id: string) => `/orders/${id}`,
  CANCEL_ORDER: (id: string) => `/orders/${id}/cancel`,
}

export interface GetOrdersParams {
  page?: number
  limit?: number
  status?: string
}

const getPayload = <T>(response: ApiResponse<T>): T => response.metadata ?? response.data!

export const orderService = {
  /**
   * Create new order from cart (checkout)
   */
  async checkout(data: CheckoutData): Promise<Order> {
    const response = await axiosInstance.post<ApiResponse<Order>>(
      ORDER_ENDPOINTS.CHECKOUT,
      data
    )
    return getPayload(response.data)
  },

  /**
   * Get user's orders with optional pagination and filters
   */
  async getOrders(params?: GetOrdersParams): Promise<OrdersResponse> {
    const response = await axiosInstance.get<ApiResponse<OrdersResponse>>(
      ORDER_ENDPOINTS.GET_ORDERS,
      { params }
    )
    return getPayload(response.data)
  },

  /**
   * Get single order by ID
   */
  async getOrderById(id: string): Promise<Order> {
    const response = await axiosInstance.get<ApiResponse<Order>>(
      ORDER_ENDPOINTS.GET_ORDER_BY_ID(id)
    )
    return getPayload(response.data)
  },

  /**
   * Cancel an order
   */
  async cancelOrder(id: string): Promise<Order> {
    const response = await axiosInstance.post<ApiResponse<Order>>(
      ORDER_ENDPOINTS.CANCEL_ORDER(id)
    )
    return getPayload(response.data)
  },
}

export default orderService
