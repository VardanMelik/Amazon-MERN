import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';

function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat
                decimalScale={2}
                value= {0}
                displayType={'text'}
                thousandSeparator={true} 
                prefix={'$'}
                renderText = { (value) => (
                    <>
                        <p>
                            Subtotal (0 items): <strong>0</strong>
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
