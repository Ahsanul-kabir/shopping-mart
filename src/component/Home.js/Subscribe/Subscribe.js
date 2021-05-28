import React from 'react';
import './Subscribe.css';
const Subscribe = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <h1 className="text-center">Join our newsletter and get <br /> $10 discount for your first order</h1>
                    <input type="text" placeholder="Your Email" />
                    <button className="btn-style btn">Subscribe</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;