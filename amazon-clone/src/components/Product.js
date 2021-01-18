import React from 'react';
import './Product.css';
import { useStateValue } from '../StateProvider';

function Product({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    console.log('This is the basket ', basket)
    const addToBasket = () => {
        //dispatch the item into the date layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });

    }
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
            <button 
                    onClick={addToBasket}
                className="button_add_basket">
                Add to Basket
            </button>
        </div>
    )
}

export default Product;