export interface User {
    id: string | number;
    name: string;
    email: string;
    role?: string;
    phone?: string;
    address?: string;
    province_name?: string;
    district_name?: string;
    ward_name?: string;
    to_district_id?: number | null;
    to_ward_code?: string | null;
}

export interface LoginData {
    email: string;
    password: string;
}

export interface ApiResponse<T> {
    message?: string;
    metadata: T;
    data?: T;
    success?: boolean;
}

export interface Category {
    id: number;
    name: string;
    status: 'active' | 'inactive';
    created_at?: string;
    updated_at?: string;
}

export interface Product {
    id: number;
    name: string;
    price: number;
    image?: string | null;
    description?: string | null;
    sku?: string | null;
    status: 'available' | 'out_of_stock' | 'discontinued';
    categories?: {
        id: number;
        name: string;
    } | null;
    created_at?: string;
    updated_at?: string;
    recipes?: Recipe[];
    sold_count?: number;
    is_best_seller?: boolean;
}

export interface InventoryItem {
    id: number;
    name: string;
    unit: string;
    quantity?: number | string | null;
    min_quantity?: number | string | null;
    minQuantity?: number | string | null;
    cost_price?: number | string | null;
    costPrice?: number | string | null;
    supplier_name?: string | null;
    supplierName?: string | null;
    status?: 'available' | 'out_of_stock';
    created_at?: string;
    updated_at?: string;
}

export interface Recipe {
    id: number;
    quantity_used: number | string;
    created_at?: string;
    products?: {
        id: number;
        name: string;
        sku?: string | null;
    };
    inventory: {
        id: number;
        name: string;
        unit: string;
    };
}

export interface OrderItem {
    id: number;
    quantity: number;
    unit_price: number | string;
    subtotal: number | string;
    products?: {
        id: number;
        name: string;
        sku?: string | null;
    };
}

export interface Order {
    id: number;
    coupon_id?: number | null;
    order_code: string;
    discount_amount?: number | string | null;
    shipping_fee?: number | string | null;
    total_amount: number | string;
    shipping_address: string;
    note?: string | null;
    order_status: 'pending' | 'confirmed' | 'preparing' | 'completed' | 'cancelled';
    payment_status: 'unpaid' | 'paid' | 'failed' | 'refunded';
    payment_method?: 'cash' | 'momo' | 'banking' | 'zalopay' | 'vnpay' | null;
    created_at?: string;
    updated_at?: string;
    user?: {
        id: number;
        name: string;
        email: string;
    };
    order_items?: OrderItem[];
    payment?: {
        id: number;
        method: 'cash' | 'momo' | 'banking' | 'zalopay' | 'vnpay';
        status?: 'pending' | 'success' | 'failed' | 'refunded';
        transaction_code?: string | null;
        created_at?: string;
    } | null;
}

export interface Coupon {
    id: number;
    code: string;
    name: string;
    description?: string | null;
    discount_type: 'percentage' | 'fixed';
    discount_value: number | string;
    min_order_value?: number | string | null;
    max_discount_amount?: number | string | null;
    usage_limit?: number | null;
    used_count?: number | null;
    starts_at?: string | null;
    expires_at?: string | null;
    status: 'active' | 'inactive';
    created_at?: string;
    updated_at?: string;
}

export interface ShippingProvince {
    ProvinceID: number;
    ProvinceName: string;
}

export interface ShippingDistrict {
    DistrictID: number;
    DistrictName: string;
    ProvinceID: number;
}

export interface ShippingWard {
    WardCode: string;
    WardName: string;
    DistrictID: number;
}
