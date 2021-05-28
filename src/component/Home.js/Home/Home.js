import React from 'react';
import CategoriesProduct from '../CategoriesProduct/CategoriesProduct';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Slider from '../Slider/Slider';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <CategoriesProduct></CategoriesProduct>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;