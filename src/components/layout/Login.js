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
                        <img className="person-avatar" srcSet={PersonAvatar} 
                        alt="person avatar" aria-hidden="true"/>
                        <form id="user-login">
                            <input type="text" id="login-username" name="login-username" placeholder="Username"/>
                            <input type="text" id="login-password" name="login-password" placeholder="Password"/>
                            <input type="submit" id="user-login-btn" value="Login" className="navy-btn"/>
                            <div>
                                <input type="checkbox" id="remember-user" name="remember-user" value="Remember Me"/>
                                <label htmlFor="remember-user">Remember Me</label>
                                <p><a href="https://shanecharper.com">Forgot your password?</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;