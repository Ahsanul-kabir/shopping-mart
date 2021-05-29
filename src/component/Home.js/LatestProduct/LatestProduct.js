import React from 'react';
import './LatestProduct.css';
import latestProduct1 from '../../../img/latestProduct1.png';
import latestProduct2 from '../../../img/latestProduct2.png';
import latestProduct3 from '../../../img/latestProduct3.png';
import latestProduct4 from '../../../img/latestProduct4.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
const LatestProduct = () => {
    return (
        <section className="bg-light latest-product">
            <div className="container-fluid">
                <div className="row">
                    <h1 className="text-center">Latest products</h1>
                    <div className="col-lg-2 col-md-4">
                       <div className="latest">
                       <a href="/">
                            <div>
                                <img className="img-fluid" src={latestProduct1} alt="" />
                            </div>
                            <div>
                                <p className="star">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStarHalfAlt} />
                                </p>
                                <a className="product-name" href="/">Lorem ipsum dolor sit amet</a>
                                <h2 className="price">$105 <s className="old-price">$125</s></h2>
                                <button className="btn">Add to cart</button>
                            </div>
                        </a>
                       </div>
                    </div>
                    <div className="col-lg-2 col-md-4">
                        <div className="latest">
                            <a href="/">
                                <div>
                                    <img className="img-fluid" src={latestProduct2} alt="" />
                                </div>
                                <div>
                                    <p className="star">
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </p>
                                    <a className="product-name" href="/">Lorem ipsum dolor sit amet</a>
                                    <h2 className="price">$105 <s className="old-price">$125</s></h2>
                                    <button className="btn">Add to cart</button>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4">
                        <div className="latest">
                            <a href="/">
                                <div>
                                    <img className="img-fluid" src={latestProduct3} alt="" />
                                </div>
                                <div>
                                    <p className="star">
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStarHalfAlt} />
                                        <FontAwesomeIcon icon={faStarHalfAlt} />
                                    </p>
                                    <a className="product-name" href="/">Lorem ipsum dolor sit amet</a>
                                    <h2 className="price">$105 <s className="old-price">$125</s></h2>
                                    <button className="btn">Add to cart</button>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4">
                        <div className="latest">
                            <a href="/">
                                <div>
                                    <img className="img-fluid" src={latestProduct4} alt="" />
                                </div>
                                <div>
                                    <p className="star">
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </p>
                                    <a className="product-name" href="/">Lorem ipsum dolor sit amet</a>
                                    <h2 className="price">$105 <s className="old-price">$125</s></h2>
                                    <button className="btn">Add to cart</button>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4">
                        <div className="latest">
                            <a href="/">
                                <div>
                                    <img className="img-fluid" src={latestProduct4} alt="" />
                                </div>
                                <div>
                                    <p className="star">
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStarHalfAlt} />
                                    </p>
                                    <a className="product-name" href="/">Lorem ipsum dolor sit amet</a>
                                    <h2 className="price">$105 <s className="old-price">$125</s></h2>
                                    <button className="btn">Add to cart</button>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4">
                        <div className="latest">
                            <a href="/">
                                <div>
                                    <img className="img-fluid" src={latestProduct4} alt="" />
                                </div>
                                <div>
                                    <p className="star">
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </p>
                                    <a className="product-name" href="/">Lorem ipsum dolor sit amet</a>
                                    <h2 className="price">$105 <s className="old-price">$125</s></h2>
                                    <button className="btn">Add to cart</button>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LatestProduct;
