import React, { Component } from 'react';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <header>
            <img className="logo" srcSet={logo} alt="Lawler Test Prep"/>
            <button className="btn-login navy-btn">Login</button>
        </header>
    )
}

export default Header;