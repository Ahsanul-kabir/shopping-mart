import React from 'react';
import './CategoriesProduct.css'
import categoriesProduct1 from '../../../img/categoriesProduct1.png';
import categoriesProduct2 from '../../../img/categoriesProduct2.png';
import categoriesProduct3 from '../../../img/categoriesProduct3.png';
const CategoriesProduct = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 cate col-md-6">
                        <div className="category-img">
                            <img className="img-fluid" src={categoriesProduct1} alt="" />
                            <div className="category-text">
                                <h3>Lorem ipsum dolor sit amet.</h3>
                                <h5>-7%</h5>
                                <button className="btn">Shop Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 cate col-md-6">
                        <div className="category-img">
                            <img className="img-fluid" src={categoriesProduct2} alt="" />
                            <div className="category-text">
                                <h3>Lorem ipsum dolor sit amet.</h3>
                                <h5>-7%</h5>
                                <button className="btn">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 cate col-md-6">
                        <div className="category-img">
                            <img className="img-fluid" src={categoriesProduct3} alt="" />
                            <div className="category-text">
                                <h3>Lorem ipsum dolor sit amet.</h3>
                                <h5>-7%</h5>
                                <button className="btn">More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategoriesProduct;
