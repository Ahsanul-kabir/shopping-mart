import React from 'react';
import './LatestReview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
const LatestReview = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <h1 className="text-center">Latest Review</h1>
                    <div className="col-lg-4">
                        <div className="testimonial">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati tempora reiciendis fugit dolore cupiditate fuga veritatis incidunt nobis temporibus sint.</p>
                            <div className="testimonial-author">
                                <span>Srikanto R.</span>
                            </div>
                            <p className="rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="testimonial">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati tempora reiciendis fugit dolore cupiditate fuga veritatis incidunt nobis temporibus sint.</p>

                            <div className="testimonial-author">
                                <span>Enamul H.</span>
                            </div>
                            <p className="rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStarHalfAlt} />
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="testimonial">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati tempora reiciendis fugit dolore cupiditate fuga veritatis incidunt nobis temporibus sint.</p>

                            <div className="testimonial-author">
                                <span>Ahsanul K.</span>
                            </div>
                            <p className="rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStarHalfAlt} />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LatestReview;