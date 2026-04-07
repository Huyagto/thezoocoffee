import axiosInstance from "@/lib/axios"
import type {
  ApiResponse,
  ShippingDistrict,
  ShippingProvince,
  ShippingWard,
} from "@/types/api"

const getPayload = <T>(response: ApiResponse<T>): T =>
  response.metadata ?? response.data!

const shippingService = {
  async getProvinces(): Promise<ShippingProvince[]> {
    const response = await axiosInstance.get<ApiResponse<ShippingProvince[]>>(
      "/shipping/provinces"
    )

    return getPayload(response.data)
  },

  async getDistricts(provinceId: number): Promise<ShippingDistrict[]> {
    const response = await axiosInstance.get<ApiResponse<ShippingDistrict[]>>(
      "/shipping/districts",
      {
        params: { provinceId },
      }
    )

    return getPayload(response.data)
  },

  async getWards(districtId: number): Promise<ShippingWard[]> {
    const response = await axiosInstance.get<ApiResponse<ShippingWard[]>>(
      "/shipping/wards",
      {
        params: { districtId },
      }
    )

    return getPayload(response.data)
  },
}

export default shippingService
