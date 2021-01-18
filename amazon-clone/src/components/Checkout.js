import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{ basket, dispatch}] = useStateValue();

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
                    <img src="https://images-na.ssl-images-amazon.com/images/I/61Ss9v9trIL._AC_SX569_.jpg" />  

                    { basket.map( item => {
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    })}
                    {/* CheckoutProduct */}
                </div>
            </div>

            <div className="checkout_right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
