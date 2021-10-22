import "./Checkout.css"
import React from 'react'
import Img from "./A.jpg";

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout-left">
                <img src={Img} alt="Hi" className="checkout-ad" />
                {/* <Img alt="Why" className="checkout-ad" /> */}
                {/* Hello checkout */}
            <h2 className="checkout-title" >
                Shopping Basket
            </h2>
            
            </div>
        <div className="checkout-right">
            {/* Subtle  */}
            {/* Suvtle Addtion */}
        </div>
        </div>
    )
}

export default Checkout
