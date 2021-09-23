import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './Header.css';
import {Link} from "react-router-dom";
// import Button from '@material-ui/core/Button';

function Header() {
    return (
        <div className='header'>
            <Link to='/'>
            <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" className="header-logo" />
            </Link>
            <div className="header-search">
                <input type="text" className="header-search-input" />
                <SearchIcon className="header-search-icon"/>
                {/* <Button/> */}
            </div>
            <div className="header-nav">
                <div className="header-option">
                    <span className="header-option-1">
                        Hello Abhi
                    </span>
                    <span className="header-option-2">
                        Sign In
                    </span>
                </div>
                <div className="header-option">
                <span className="header-option-1">
                        Returns
                    </span>
                    <span className="header-option-2">
                        & Orders
                    </span>
                </div>
                <div className="header-option">
                <span className="header-option-1">
                        Try
                    </span>
                    <span className="header-option-2">
                        Prime
                    </span>
                </div>
                {/* <a href="/checkout"> */}
                <Link to='/checkout'>
                <div className="header-option-basket">
                    <ShoppingBasketIcon />
                    <span className="header-option-2 header-basket-count" >0</span>
                </div>
                </Link>
                {/* </a> */}
            </div>
        </div>
    )
}

export default Header
