import React, { Component } from 'react';
import { connect } from "react-redux";
import { authActions } from '../../redux/actions/authActions';

class Landing extends Component {
    componentDidMount() {
        this.props.authActions();
    }

    render() {
        return (
            <h1>This is the landing page</h1>
        )
    }
}

const mapStateToProps = state => ({
    message: state.message
  })

export default connect(
    mapStateToProps,
    {
        authActions
    }
)(Landing);