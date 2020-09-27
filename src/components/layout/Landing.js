import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import TipsContact from '../layout/TipsContact';

import { connect } from "react-redux";
import { authActions } from '../../redux/actions/authActions';

class Landing extends Component {
    componentDidMount() {
        this.props.authActions();
    }

    render() {
        return (
            <>
                <section id="jumbotron">
                    <div id="tip">
                        <h2>Tip #14: Start with what you know</h2>
                        <p>Time saving tip to make sure you maximize your score
                            in reading, writing, and math.
                        </p>
                    </div>
                </section>
                <section id="about">
                    <div id="about-english">
                        <p>Lawler Test Prep (LTP) takes students through an in-depth 
                            course that prepares & strengthens skills that are evaluated 
                            in the Standardized Aptitude Test (SAT). Student improvement 
                            is tangibly calculated at every step along the way.</p>
                        <Link className="about-btn white-btn" to="/about-en">Read more about us here</Link>
                    </div>
                    <div id="about-spanish">
                        <p lang="es">Lawler Test Prep (LTP) lleva a los estudiantes a través 
                        de un curso profundo que prepara y fortalece las habilidades específicas 
                        que se evalúan en la Prueba de Razonamiento (SAT). El mejoramiento del 
                        estudiante se calcula de manera tangible en cada paso del camino.</p>
                        <Link className="about-btn white-btn" lang="es" to="/about-es">Lea más sobre nosotros aquí</Link>
                    </div>
                </section>
                <TipsContact/>
            </>
        );
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