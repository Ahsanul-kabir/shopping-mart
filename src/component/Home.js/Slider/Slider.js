import React from 'react';
import './Slider.css';
import sliderImg from '../../../img/sliderimg1.jpg';
const Slider = () => {
    return (
        <div>
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner slider">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src={sliderImg} alt="First slide" />
                    </div>
                    <div class="carousel-item slider">
                        <img class="d-block w-100" src={sliderImg} alt="Second slide" />
                    </div>
                    <div class="carousel-item slider">
                        <img class="d-block w-100" src={sliderImg} alt="Third slide" />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
};

export default Slider;