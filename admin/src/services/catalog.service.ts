import axiosInstance from '@/lib/axios';
import type { ApiResponse, Category, Coupon, InventoryItem, Order, Product, Recipe, User } from '@/types/api';

const getPayload = <T>(response: ApiResponse<T>): T => response.metadata ?? response.data!;

const normalizeOrder = (order: Order & { users?: Order['user'] }): Order => ({
    ...order,
    user: order.user ?? order.users,
});

const catalogService = {
    async getCategories(): Promise<Category[]> {
        const response = await axiosInstance.get<ApiResponse<Category[]>>('/categories');

        return getPayload(response.data);
    },

    async getCoupons(): Promise<Coupon[]> {
        const response = await axiosInstance.get<ApiResponse<Coupon[]>>('/coupons');
        return getPayload(response.data);
    },

    async createCoupon(data: {
        code: string;
        name: string;
        description?: string;
        discountType: 'percentage' | 'fixed';
        discountValue: number;
        minOrderValue?: number;
        maxDiscountAmount?: number;
        usageLimit?: number;
        startsAt?: string;
        expiresAt?: string;
        status?: 'active' | 'inactive';
    }): Promise<Coupon> {
        const response = await axiosInstance.post<ApiResponse<Coupon>>('/coupons', data);
        return getPayload(response.data);
    },

    async updateCoupon(id: number, data: Partial<Coupon> & {
        discountType?: 'percentage' | 'fixed';
        discountValue?: number;
        minOrderValue?: number;
        maxDiscountAmount?: number;
        usageLimit?: number;
        startsAt?: string;
        expiresAt?: string;
    }): Promise<Coupon> {
        const response = await axiosInstance.put<ApiResponse<Coupon>>(`/coupons/${id}`, data);
        return getPayload(response.data);
    },

    async toggleCouponStatus(id: number): Promise<Coupon> {
        const response = await axiosInstance.patch<ApiResponse<Coupon>>(`/coupons/${id}/status`);
        return getPayload(response.data);
    },

    async deleteCoupon(id: number): Promise<void> {
        await axiosInstance.delete(`/coupons/${id}`);
    },

    async createCategory(data: { name: string; status?: 'active' | 'inactive' }): Promise<Category> {
        const response = await axiosInstance.post<ApiResponse<Category>>('/categories', data);

        return getPayload(response.data);
    },

    async getProducts(): Promise<Product[]> {
        const response = await axiosInstance.get<
            ApiResponse<{
                products: Product[];
                total: number;
                page: number;
                limit: number;
            }>
        >('/products');

        const payload = getPayload(response.data);

        return Array.isArray(payload) ? payload : (payload.products ?? []);
    },

    async getInventory(): Promise<InventoryItem[]> {
        const response = await axiosInstance.get<ApiResponse<InventoryItem[]>>('/inventory');

        return getPayload(response.data);
    },

    async createInventory(data: {
        name: string;
        unit: string;
        quantity?: number;
        minQuantity?: number;
        costPrice?: number;
        supplierName?: string;
        status?: 'available' | 'out_of_stock';
    }): Promise<InventoryItem> {
        const response = await axiosInstance.post<ApiResponse<InventoryItem>>('/inventory', data);

        return getPayload(response.data);
    },

    async createProduct(data: {
        name: string;
        categoryId: number;
        price: number;
        image?: string;
        description?: string;
        sku?: string;
        status?: 'available' | 'out_of_stock' | 'discontinued';
    }): Promise<Product> {
        const response = await axiosInstance.post<ApiResponse<Product>>('/products', data);

        return getPayload(response.data);
    },

    async getRecipes(): Promise<Recipe[]> {
        const response = await axiosInstance.get<ApiResponse<Recipe[]>>('/recipes');

        return getPayload(response.data);
    },

    async createRecipe(data: {
        productId: number;
        recipes: Array<{
            inventoryId: number;
            quantityUsed: number;
        }>;
    }): Promise<Product> {
        const response = await axiosInstance.post<ApiResponse<Product>>('/recipes', data);

        return getPayload(response.data);
    },

    async getUsers(): Promise<User[]> {
        const response = await axiosInstance.get<ApiResponse<User[]>>('/user/users');

        return getPayload(response.data);
    },

    async updateUserRole(id: number, role: 'customer' | 'admin'): Promise<User> {
        const response = await axiosInstance.patch<ApiResponse<User>>(`/user/${id}`, { role });
        return getPayload(response.data);
    },

    async deleteUser(id: number): Promise<void> {
        await axiosInstance.delete(`/user/${id}`);
    },

    async getOrders(): Promise<Order[]> {
        const response = await axiosInstance.get<ApiResponse<Order[]>>('/orders');
        return getPayload(response.data).map((order) => normalizeOrder(order as Order & { users?: Order['user'] }));
    },

    async updateOrderStatus(id: number, status: Order['order_status']): Promise<Order> {
        const response = await axiosInstance.patch<ApiResponse<Order>>(`/orders/${id}/status`, {
            status,
        });
        return normalizeOrder(getPayload(response.data) as Order & { users?: Order['user'] });
    },

    async updateOrderPaymentStatus(id: number, paymentStatus: Order['payment_status']): Promise<Order> {
        const response = await axiosInstance.patch<ApiResponse<Order>>(`/orders/${id}/payment`, {
            paymentStatus,
        });
        return normalizeOrder(getPayload(response.data) as Order & { users?: Order['user'] });
    },

    async deleteOrder(id: number): Promise<void> {
        await axiosInstance.delete(`/orders/${id}`);
    },

    async updateCategory(id: number, data: Partial<Category>): Promise<Category> {
        const response = await axiosInstance.put<ApiResponse<Category>>(`/categories/${id}`, data);
        return getPayload(response.data);
    },

    async deleteCategory(id: number): Promise<void> {
        await axiosInstance.delete(`/categories/${id}`);
    },

    async updateProduct(id: number, data: {
        name?: string;
        categoryId?: number;
        price?: number;
        image?: string | null;
        description?: string | null;
        sku?: string | null;
        status?: 'available' | 'out_of_stock' | 'discontinued';
    }): Promise<Product> {
        const response = await axiosInstance.put<ApiResponse<Product>>(`/products/${id}`, data);
        return getPayload(response.data);
    },

    async toggleProductStatus(id: number): Promise<Product> {
        const response = await axiosInstance.patch<ApiResponse<Product>>(`/products/${id}/status`);
        return getPayload(response.data);
    },

    async deleteProduct(id: number): Promise<void> {
        await axiosInstance.delete(`/products/${id}`);
    },

    async updateInventory(id: number, data: Partial<InventoryItem>): Promise<InventoryItem> {
        const response = await axiosInstance.put<ApiResponse<InventoryItem>>(`/inventory/${id}`, data);
        return getPayload(response.data);
    },

    async toggleInventoryStatus(id: number): Promise<InventoryItem> {
        const response = await axiosInstance.patch<ApiResponse<InventoryItem>>(`/inventory/${id}/status`);
        return getPayload(response.data);
    },

    async deleteInventory(id: number): Promise<void> {
        await axiosInstance.delete(`/inventory/${id}`);
    },

    async updateRecipe(id: number, data: { quantity_used: number }): Promise<Recipe> {
        const response = await axiosInstance.put<ApiResponse<Recipe>>(`/recipes/${id}`, data);
        return getPayload(response.data);
    },

    async deleteRecipe(id: number): Promise<void> {
        await axiosInstance.delete(`/recipes/${id}`);
    },
};

export default catalogService;
