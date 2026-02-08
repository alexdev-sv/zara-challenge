'use client'
import { useCart } from "@/contexts/CartProvider"
import { usePathname, useRouter } from "next/navigation"

/* eslint-disable @next/next/no-img-element */
export const Navbar = () => {
    const { cart } = useCart()
    const router = useRouter()
    const pathname = usePathname()
    return (
        <>
            <div className="custom-navbar">
                <div>
                    <img 
                    onClick={() => {
                        router.push('/')
                    }}
                    src='/logo.png' alt={"Logo image"}/>
                </div>
                {
                    pathname === '/cart' ? <></> : <div className="cart-container">
                    <img height={16} width={12} src='/bag.svg' alt={"Icon image"}/>
                    <div onClick={() => {
                        router.push('/cart')
                    }}>{cart?.length ?? 0}</div>
                </div>
                }
            </div>  
        </>
    )
}