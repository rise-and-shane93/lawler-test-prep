import React, { Component } from 'react';
import logo from '../../images/logo.png';

import Login from '../layout/Login';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            displayClass: "display-none"
        };

        this.btnLogin = React.createRef();
    }

    // handleOpenModal = () => {
    //     this.setState({
    //         displayClass: "display-block"
    //     });
    // }

    handleModal = () => {
        let updatedState = "";
        if (this.state.displayClass === "display-block") {
            updatedState = "display-none";
            this.btnLogin.current.disabled = false;
            this.btnLogin.current.classList.remove("btn-disabled");
        } else {
            updatedState = "display-block";
            this.btnLogin.current.disabled = true;
            this.btnLogin.current.classList.add("btn-disabled");
        }
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
                    <button id="btn-login" className="navy-btn" ref={this.btnLogin}
                    onClick={this.handleModal}>Login</button>
                </header>
                <Login display={this.state.displayClass} closeModal={this.handleModal} />
            </>
            );
    }    

}

export default Header;