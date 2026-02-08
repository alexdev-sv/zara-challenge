'use client'

import { useCart } from "@/contexts/CartProvider"
import { useRouter } from "next/navigation"

const CartFooter = () => {
  const { cart } = useCart()
  const totalAmount = cart.reduce((acc, item) => acc + item.price, 0)
  const router = useRouter()
  return (
    <div className="cart-footer">
      <button
      onClick={() => {
        router.push('/')
      }}
      className="cart-footer-button continue">
        CONTINUE SHOPPING
      </button>

      <div className="payment-container">
          <span>TOTAL</span>
          <span>{totalAmount} EUR </span>
          <button className="cart-footer-button pay">
          Pay
          </button>
      </div>
    </div>
  )
}

export { CartFooter }
