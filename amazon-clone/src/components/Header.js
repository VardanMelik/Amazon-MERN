import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';


function Header() {
    return (
        <div className="header">
            <img
                className="header_logo"
                 src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" />
        
            <div className="header_search">
                <input 
                    className="header_searchInput"
                    type="text"/>
                    <SearchIcon className="header_searchIcon"/>
            </div>

            <div className="header_nav">
                <div className="header_option">
                    <span className="header_username">
                        Hello, Guest
                    </span>
                    <span className="header_signIn">
                        Sign, In
                    </span>
                </div>

                <div className="header_option">
                <span className="header_returns">
                        Returns
                    </span>
                    <span className="header_orders">
                        Orders
                    </span>
                </div>

                <div className="header_option">
                <span className="header_your">
                        Your
                    </span>
                    <span className="header_prime">
                        Prime
                    </span>
                </div>

                <div className="header_basket">
                    <ShoppingBasketOutlinedIcon/>
                    <span className="header_basketCount">
                        0
                    </span>
                </div>


            </div>
        </div>
    )
}

export default Header
