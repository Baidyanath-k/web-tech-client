import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import oneImg from '../../asset/Brand/one.jpg';
import twoImg from '../../asset/Brand/two.jpg';
import thrreeImg from '../../asset/Brand/three.jpg';
const Home = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={oneImg}
                    style={{height:'400px'}}
                    alt="First slide"/>
                
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{height:'400px'}}
                    src={twoImg}
                    alt="Second slide"/>

                
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 "
                    style={{height:'400px'}}
                    src={thrreeImg}
                    alt="Third slide"/>
            </Carousel.Item>
        </Carousel>
    );
};

export default Home;