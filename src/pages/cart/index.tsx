/* eslint-disable @next/next/no-img-element */
'use client'

import { useCart } from "@/contexts/CartProvider"
import { Navbar } from "@/components/layout/Navbar"
import { CartFooter } from "@/components/layout/FooterCart"

const Cart = () => {
  const { cart, removeFromCart } = useCart()

  return (
    <div className="cart-page">
      <Navbar />

      <div className="cart-content">
        <div className="cart-title">
          CART ({cart?.length ?? 0})
        </div>

        <div className="cart-items">
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-image">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="cart-item-info">
                <div className="cart-item-top">
                  <div className="cart-item-name">{item.name.toUpperCase()}</div>
                  <div className="cart-item-details">
                    <div>{item.color}</div>
                    <div>{item.storage}</div>
                  </div>
                  <div className="cart-item-price">{item.price} EUR</div>
                </div>

                <div
                  className="cart-item-remove"
                  onClick={() => removeFromCart(item.id)}
                >
                  Eliminar
                </div>
              </div>
            </div>
          ))}
        </div>

        <CartFooter />
      </div>
    </div>
  )
}

export default Cart
