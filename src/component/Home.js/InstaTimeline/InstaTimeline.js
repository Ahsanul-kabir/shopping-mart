import React from 'react';
import './InstaTimeline.css';
import instaPicture1 from '../../../img/categoriesProduct1.png'
const InstaTimeline = () => {
    return (
        <section className="insta-timeline">
            <div className="container-fluid">
                <div className="row">
                    <h1 className="text-center">Follow <a href="https://instagram.com/enamulhaque.dev">@ShoppingMart</a> on Instagram</h1>
                    <div className="col-lg-3">
                        <img className="img-fluid" src={ instaPicture1 } alt="" />
                    </div>
                    <div className="col-lg-3">
                        <img className="img-fluid" src={ instaPicture1 } alt="" />
                    </div>
                    <div className="col-lg-3">
                        <img className="img-fluid" src={ instaPicture1 } alt="" />
                    </div>
                    <div className="col-lg-3">
                        <img className="img-fluid" src={ instaPicture1 } alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstaTimeline;