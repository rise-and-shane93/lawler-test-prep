import React, { Component } from 'react';

class Login extends Component {

    componentDidMount() {
        console.log("hey");

    }

    // handleRenderModal = () => {

    // }

    render() {
        return(
            <div id="login-overlay">
                <div id="login-modal" className={this.props.display}>
                    <div id="login-inner">
                        <button id="login-close" className="navy-btn" 
                        onClick={this.props.closeModal}>&times;</button>
                        <p>Test</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;