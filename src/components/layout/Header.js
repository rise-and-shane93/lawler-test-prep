import React, { Component } from 'react';
import logo from '../../images/logo.png';

import Login from '../layout/Login';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            showLogin: false
        };
    }

    handleLoginModal = () => {
        this.setState({
            showLogin: !this.state.showLogin
        });
    }

    render() {
        return(
            <>
                <header>
                    <img className="logo" srcSet={logo} alt="Lawler Test Prep"/>
                    <button id="btn-login" className="navy-btn" onClick={this.handleLoginModal}>Login</button>
                </header>
                <Login display={this.state.showLogin} />
            </>
            );
    }    

}

export default Header;