'use client';

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';

import cartService from '@/services/cart.service';
import { useAuth } from './auth-context';

export interface CartItem {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
}

interface CartContextType {
    items: CartItem[];
    addToCart: (item: Omit<CartItem, 'quantity'>) => Promise<void>;
    removeFromCart: (id: number) => Promise<void>;
    updateQuantity: (id: number, quantity: number) => Promise<void>;
    clearCart: () => Promise<void>;
    totalItems: number;
    totalPrice: number;
    isLoading: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

function normalizeCartItem(item: any): CartItem {
    return {
        id: Number(item.id ?? item.productId),
        name: item.name ?? item.product?.name ?? '',
        description: item.description ?? item.product?.description ?? '',
        price: Number(item.price ?? item.product?.price ?? 0),
        image: item.image ?? item.product?.image ?? '/images/placeholder.jpg',
        quantity: Number(item.quantity ?? 0),
    };
}

export function CartProvider({ children }: { children: ReactNode }) {
    const { user, isLoading: isAuthLoading } = useAuth();
    const [items, setItems] = useState<CartItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const loadCart = useCallback(async () => {
        if (!user) {
            setItems([]);
            setIsLoading(false);
            return;
        }

        try {
            setIsLoading(true);
            const cart = await cartService.getCart();
            setItems((cart.items || []).map(normalizeCartItem));
        } catch (error) {
            console.error('Error loading cart from API:', error);
            setItems([]);
        } finally {
            setIsLoading(false);
        }
    }, [user]);

    useEffect(() => {
        if (isAuthLoading) {
            return;
        }

        loadCart();
    }, [isAuthLoading, loadCart]);

    const addToCart = useCallback(
        async (item: Omit<CartItem, 'quantity'>) => {
            if (!user) {
                return;
            }

            const addedItem = await cartService.addToCart({
                productId: String(item.id),
                quantity: 1,
            });

            const normalized = normalizeCartItem(addedItem);
            setItems((prevItems) => {
                const existingItem = prevItems.find((cartItem) => cartItem.id === normalized.id);
                if (existingItem) {
                    return prevItems.map((cartItem) => (cartItem.id === normalized.id ? normalized : cartItem));
                }
                return [...prevItems, normalized];
            });
        },
        [user],
    );

    const removeFromCart = useCallback(
        async (id: number) => {
            if (!user) {
                return;
            }

            await cartService.removeFromCart(String(id));
            setItems((prevItems) => prevItems.filter((item) => item.id !== id));
        },
        [user],
    );

    const updateQuantity = useCallback(
        async (id: number, quantity: number) => {
            if (!user) {
                return;
            }

            const updatedItem = await cartService.updateCartQuantity(String(id), { quantity });

            if (quantity < 1 || !updatedItem) {
                setItems((prevItems) => prevItems.filter((item) => item.id !== id));
                return;
            }

            const normalized = normalizeCartItem(updatedItem);
            setItems((prevItems) => prevItems.map((item) => (item.id === id ? normalized : item)));
        },
        [user],
    );

    const clearCart = useCallback(async () => {
        if (!user) {
            setItems([]);
            return;
        }

        await cartService.clearCart();
        setItems([]);
    }, [user]);

    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                items,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                totalItems,
                totalPrice,
                isLoading,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
