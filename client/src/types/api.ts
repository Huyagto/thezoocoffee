// User & Auth Types
export interface User {
  id: string | number
  email: string
  name: string
  role?: string
  phone?: string
  address?: string
  avatar?: string
  createdAt?: string
  updatedAt?: string
}

export interface LoginData {
  email: string
  password: string
}

export interface RegisterData {
  email: string
  password: string
  name: string
  phone?: string
  address?: string
}

export type AuthResponse = User

// Product Types
export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  images?: string[]
  category: string
  stock: number
  badge?: string
  rating?: number
  reviewCount?: number
  createdAt: string
  updatedAt: string
}

export interface ProductsResponse {
  products: Product[]
  total: number
  page: number
  limit: number
  totalPages: number
}

// Cart Types
export interface CartItem {
  id: string
  productId: string
  product: Product
  quantity: number
}

export interface Cart {
  id: string
  userId: string
  items: CartItem[]
  subtotal: number
  createdAt: string
  updatedAt: string
}

export interface AddToCartData {
  productId: string
  quantity: number
}

export interface UpdateCartQuantityData {
  quantity: number
}

// Order Types
export type PaymentMethod = "cod" | "vnpay" | "momo" | "zalopay"

export type OrderStatus =
  | "pending"
  | "confirmed"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled"

export interface OrderItem {
  id: string
  productId: string
  product: Product
  quantity: number
  price: number
}

export interface ShippingInfo {
  fullName: string
  phone: string
  email: string
  address: string
  note?: string
}

export interface Order {
  id: string
  orderNumber: string
  userId: string
  items: OrderItem[]
  shippingInfo: ShippingInfo
  paymentMethod: PaymentMethod
  status: OrderStatus
  subtotal: number
  shippingFee: number
  total: number
  paymentUrl?: string
  paidAt?: string
  createdAt: string
  updatedAt: string
}

export interface CheckoutData {
  shippingInfo: ShippingInfo
  paymentMethod: PaymentMethod
}

export interface OrdersResponse {
  orders: Order[]
  total: number
  page: number
  limit: number
  totalPages: number
}

// API Response Types
export interface ApiResponse<T> {
  message?: string
  metadata: T
  statusCode?: number
  success?: boolean
  data?: T
}

export interface ApiError {
  success: false
  message: string
  errors?: Record<string, string[]>
}
