/* eslint-disable @next/next/no-img-element */
import Image from "next/image"

export const Navbar = () => {
    return (
        <>
            <div className="custom-navbar">
                <div>
                    <img src='/logo.png' alt={"Logo image"}/>
                </div>
                <div className="cart-container">
                    <img height={16} width={12} src='/Shape.svg' alt={"Icon image"}/>
                    <span>0</span>
                </div>
            </div>  
        </>
    )
}