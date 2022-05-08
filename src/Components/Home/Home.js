import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../img/1.jpg'
import img2 from '../../img/2.jpg'
import img3 from '../../img/3.jpg'
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import Wirehouse from '../Wirehouse/Wirehouse';

const Home = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Bike Directory</h3>
                        <p>High Speed Electric Sport Racing Motorcycle Motorbike</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Sourav Motor</h3>
                        <p>High Speed Electric Sport Racing Motorcycle Motorbike</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50"
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Sourav Motor</h3>
                        <p>High Speed Electric Sport Racing Motorcycle Motorbike</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {/* service sectio and contact section */}
            <Services></Services>
            <Wirehouse></Wirehouse>
            <Contact></Contact>
        </div>
    );
};

export default Home;