import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <h3>Information</h3>
                        <a href="/">Delivery information</a>
                        <a href="/">Privacy Policy</a>
                        <a href="/">Sales</a>
                        <a href="/">Terms & Conditions</a>
                    </div>
                    <div className="col-lg-2">
                        <h3>Account</h3>
                        <a href="/">My Account</a>
                        <a href="/">My orders</a>
                        <a href="/">Returns</a>
                        <a href="/">Shipping</a>
                        <a href="/">Wishlist</a>
                    </div>
                    <div className="col-lg-2">
                        <h3>Store</h3>
                        <a href="/">Affiliate</a>
                        <a href="/">Bestseller</a>
                        <a href="/">Discount</a>
                        <a href="/">Latest Product</a>
                        <a href="/">Sales</a>
                    </div>
                    <div className="col-lg-4">
                        <h3>Need help</h3>
                        <h2>0020 500 - Shopping Mart - 000</h2>
                        <p>Monday - Friday: 9:00 - 20:00</p>
                        <p>Saturday: 11:00 - 15:00</p>
                        <button className="btn">Contact@example.com</button>
                    </div>
                    <div className="col-lg-2">
                        <h3>Our store</h3>
                        <p>Moulvibazar, 3200</p>
                        <div className="footer-social">
                            <a href="https://enamulhaque.dev"></a>
                            <a href="https://linkedin.com/in/enamulhaquee"></a>
                            <a href="https://github.com/enamulhaque7"></a>
                            <a href="https://instagram.com/enamulhaque.dev"></a>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-center">Copyright © 2021 Enamul Haque. All Rights Reserved

</p>
        </footer>
    );
};

export default Footer;