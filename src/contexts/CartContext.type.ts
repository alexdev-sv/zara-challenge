import { CartItem } from "@/models/CartItem";

export interface CartContextType {
    cart: CartItem[]
    totalItems: number
    addToCart: (item: CartItem) => void
    removeFromCart: (id: string) => void
    clearCart: () => void
}