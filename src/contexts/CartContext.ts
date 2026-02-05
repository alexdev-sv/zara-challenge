import { createContext } from 'react'
import { CartContextType } from './CartContext.type'

const CartContext = createContext<CartContextType | undefined>(undefined)

export default CartContext