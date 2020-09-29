import React, { Component } from 'react';
import logo from '../../images/logo.png';

import Login from '../layout/Login';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            displayClass: "display-none"
        };
    }

    // handleOpenModal = () => {
    //     this.setState({
    //         displayClass: "display-block"
    //     });
    // }

    handleModal = () => {
        let updatedState = this.state.displayClass === "display-block" ? "display-none" : "display-block";
        this.setState({
            displayClass: updatedState
        });
    }

    // handleCloseModal = () => {
    //     this.setState({
    //         displayClass: "display-none"
    //     });
    // }

    render() {
        return(
            <>
                <header>
                    <img className="logo" srcSet={logo} alt="Lawler Test Prep"/>
                    <button id="btn-login" className="navy-btn" onClick={this.handleModal}>Login</button>
                </header>
                <Login display={this.state.displayClass} closeModal={this.handleModal} />
            </>
            );
    }    

}

export default Header;