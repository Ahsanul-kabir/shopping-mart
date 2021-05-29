import React from 'react';
import CategoriesProduct from '../CategoriesProduct/CategoriesProduct';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import Footer from '../Footer/Footer';
import InstaTimeline from '../InstaTimeline/InstaTimeline';
import LatestProduct from '../LatestProduct/LatestProduct';
import LatestReview from '../LatestReview/LatestReview';
import Navbar from '../Navbar/Navbar';
import Slider from '../Slider/Slider';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <CategoriesProduct></CategoriesProduct>
            <LatestProduct></LatestProduct>
            <FeaturedProducts></FeaturedProducts>
            <LatestReview></LatestReview>
            <InstaTimeline></InstaTimeline>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;