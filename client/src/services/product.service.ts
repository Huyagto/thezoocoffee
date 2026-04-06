import axiosInstance from "@/lib/axios"
import type { ApiResponse, Category, Product, ProductsResponse } from "@/types/api"

const PRODUCT_ENDPOINTS = {
  GET_ALL: "/products",
  GET_BY_ID: (id: string) => `/products/${id}`,
  GET_BY_CATEGORY: (category: string) => `/products/category/${category}`,
  SEARCH: "/products/search",
  GET_CATEGORIES: "/categories",
}

export interface GetProductsParams {
  page?: number
  limit?: number
  sort?: "price_asc" | "price_desc" | "newest" | "popular"
  search?: string
}

const getPayload = <T>(response: ApiResponse<T>): T => response.metadata ?? response.data!

export const productService = {
  /**
   * Get all products with optional pagination and filters
   */
  async getAllProducts(params?: GetProductsParams): Promise<ProductsResponse> {
    const response = await axiosInstance.get<ApiResponse<ProductsResponse>>(
      PRODUCT_ENDPOINTS.GET_ALL,
      { params }
    )
    return getPayload(response.data)
  },

  /**
   * Get single product by ID
   */
  async getProductById(id: string): Promise<Product> {
    const response = await axiosInstance.get<ApiResponse<Product>>(
      PRODUCT_ENDPOINTS.GET_BY_ID(id)
    )
    return getPayload(response.data)
  },

  /**
   * Get products by category
   */
  async getProductsByCategory(
    category: string,
    params?: GetProductsParams
  ): Promise<ProductsResponse> {
    const response = await axiosInstance.get<ApiResponse<ProductsResponse>>(
      PRODUCT_ENDPOINTS.GET_BY_CATEGORY(category),
      { params }
    )
    return getPayload(response.data)
  },

  async getCategories(): Promise<Category[]> {
    const response = await axiosInstance.get<ApiResponse<Category[]>>(
      PRODUCT_ENDPOINTS.GET_CATEGORIES
    )
    return getPayload(response.data)
  },

  /**
   * Search products by query
   */
  async searchProducts(
    query: string,
    params?: GetProductsParams
  ): Promise<ProductsResponse> {
    const response = await axiosInstance.get<ApiResponse<ProductsResponse>>(
      PRODUCT_ENDPOINTS.SEARCH,
      { params: { q: query, ...params } }
    )
    return getPayload(response.data)
  },
}

export default productService
