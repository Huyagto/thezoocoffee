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
export interface Category {
  id: number
  name: string
  status: "active" | "inactive"
  created_at?: string
  updated_at?: string
}

export interface Product {
  id: number
  name: string
  description?: string | null
  price: number | string
  image?: string | null
  images?: string[]
  category?: string
  stock?: number
  badge?: string
  sold_count?: number
  is_best_seller?: boolean
  rating?: number
  reviewCount?: number
  createdAt?: string
  updatedAt?: string
  created_at?: string
  updated_at?: string
  status?: "available" | "out_of_stock" | "discontinued"
  categories?: {
    id: number
    name: string
    status?: "active" | "inactive"
  } | null
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
  id: number
  cartItemId?: number
  productId: number
  name?: string
  description?: string
  price?: number
  image?: string
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

export interface CheckoutItem {
  productId: number
  quantity: number
}

export interface Coupon {
  id: number
  code: string
  name: string
  description?: string | null
  discount_type: "percentage" | "fixed"
  discount_value: number | string
  min_order_value?: number | string | null
  max_discount_amount?: number | string | null
  usage_limit?: number | null
  used_count?: number | null
  starts_at?: string | null
  expires_at?: string | null
  status: "active" | "inactive"
  created_at?: string
  updated_at?: string
}

export interface CouponValidationResult {
  coupon: Coupon
  discountAmount: number
  finalSubtotal: number
}

export interface Order {
  id: string | number
  coupon_id?: number | null
  order_code: string
  discount_amount?: number | string | null
  total_amount: number | string
  shipping_address: string
  note?: string | null
  order_status: "pending" | "confirmed" | "preparing" | "completed" | "cancelled"
  payment_status: "unpaid" | "paid" | "failed" | "refunded"
  created_at?: string
  updated_at?: string
  user?: {
    id: number
    name: string
    email: string
  }
  users?: {
    id: number
    name: string
    email: string
  }
  order_items?: Array<{
    id: number
    quantity: number
    unit_price: number | string
    subtotal: number | string
    products?: {
      id: number
      name: string
      sku?: string | null
    }
  }>
  paymentUrl?: string
}

export interface CheckoutData {
  shippingInfo: ShippingInfo
  paymentMethod: PaymentMethod
  items: CheckoutItem[]
  couponCode?: string
}

export interface OrdersResponse {
  orders: Order[]
  total?: number
  page?: number
  limit?: number
  totalPages?: number
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
