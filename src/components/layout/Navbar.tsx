/* eslint-disable @next/next/no-img-element */
export const Navbar = () => {
    return (
        <>
            <div className="custom-navbar">
                <div>
                    <img src='/logo.png' alt={"Logo image"}/>
                </div>
                <div className="cart-container">
                    <img height={16} width={12} src='/bag.svg' alt={"Icon image"}/>
                    <span>0</span>
                </div>
            </div>  
        </>
    )
}