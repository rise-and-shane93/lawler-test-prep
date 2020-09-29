import React, { Component } from 'react';
import PersonAvatar from "../../images/blank-avatar.png";

class Login extends Component {

    // componentDidMount() {
    //     console.log("hey");

    // }

    // handleRenderModal = () => {

    // }

    render() {
        return(
            <div id="login-modal" className={this.props.display}>
                <div id="login-inner">
                    <button id="login-close" className="navy-btn" 
                    onClick={this.props.closeModal}>&times;</button>
                    <div id="login-credentials">
                        <img className="person-avatar" srcset={PersonAvatar} 
                        alt="person avatar" aria-hidden="true"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;