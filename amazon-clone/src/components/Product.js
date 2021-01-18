import React from 'react';
import './Product.css';

function Product({ id, title, image, price, rating }) {
    return(
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                <p>{rating} 🌟</p>                    
                    { // Check one more time, 
                      // It doesn't work
                        Array(rating)
                            .fill()
                            .map((_, i) => {
                            <p>🌟</p>
                            console.log('Hello')
                        })
                    }
                </div>
            </div>
            <img 
                src={image}
                alt="star" />
            <button className="button_add_basket">Add to Basket</button>
        </div>
    )
}

export default Product;