import axiosInstance from '@/lib/axios';
import type {
  ApiResponse,
  ShippingDistrict,
  ShippingProvince,
  ShippingQuote,
  ShippingWard,
} from '@/types/api';

const SHIPPING_ENDPOINTS = {
  PROVINCES: '/shipping/provinces',
  DISTRICTS: '/shipping/districts',
  WARDS: '/shipping/wards',
  FEE: '/shipping/fee',
};

const getPayload = <T>(response: ApiResponse<T>): T => response.metadata ?? response.data!;

export const shippingService = {
  async getProvinces(): Promise<ShippingProvince[]> {
    const response = await axiosInstance.get<ApiResponse<ShippingProvince[]>>(SHIPPING_ENDPOINTS.PROVINCES);
    return getPayload(response.data);
  },

  async getDistricts(provinceId: number): Promise<ShippingDistrict[]> {
    const response = await axiosInstance.get<ApiResponse<ShippingDistrict[]>>(SHIPPING_ENDPOINTS.DISTRICTS, {
      params: { provinceId },
    });

    return getPayload(response.data);
  },

  async getWards(districtId: number): Promise<ShippingWard[]> {
    const response = await axiosInstance.get<ApiResponse<ShippingWard[]>>(SHIPPING_ENDPOINTS.WARDS, {
      params: { districtId },
    });

    return getPayload(response.data);
  },

  async getFee(payload: {
    toDistrictId: number;
    toWardCode: string;
    insuranceValue?: number;
    items: Array<{ name: string; quantity: number }>;
  }): Promise<ShippingQuote> {
    const response = await axiosInstance.post<ApiResponse<ShippingQuote>>(SHIPPING_ENDPOINTS.FEE, payload);
    return getPayload(response.data);
  },
};

export default shippingService;
