import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                    src="https://cdn.adstock.pro/10/azd/ee5a78379558a4720720e446d90a2462/yPynoChf83.png"
                    className="checkout_ads" 
                    alt="" 
                />
                <div>
                    <h2 className="checkout__title">
                        Your shopping Basket
                    </h2>
                    {/* BacketItem */}
                </div>
            </div>

            <div className="checkout_right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
