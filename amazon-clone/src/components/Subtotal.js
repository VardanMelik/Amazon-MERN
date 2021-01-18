import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer';


function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
                decimalScale={2}
                value= {getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true} 
                prefix={'$'}
                renderText = { (value) => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkBox" />
                            This order contains a gist
                        </small>
                    </>
                )}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
