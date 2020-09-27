import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const TipsContact = () => {
    return (
        <section id="tips-contact">
            <div className="tips-resources">
                <Link to="/tips-resources" className="navy-btn">Tips & Resources</Link>
            </div>
            <div class="enter-email">
                <p>Get your free SAT diagnostic score.<br/>Sign up below.</p>
                <Link to="/contact" className="white-btn">Please enter your email</Link>
            </div>
            <div className="contact-box">
                <Link to="/contact" className="navy-btn">Contact</Link>
            </div>
        </section>
    )
}

export default TipsContact;