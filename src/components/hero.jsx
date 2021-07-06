import React, { useState } from 'react'
import { Container, Col, Row, Card, Button, Image, Carousel } from 'react-bootstrap'
import image1 from '../assets/img/un1.jpg'
import image2 from '../assets/img/un2.jpg'
import image3 from '../assets/img/un3.jpg'
import  '../assets/css/index.css'

function Hero() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
       
        <>
            <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
                <Carousel.Item className="carouserStyle">
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carouserStyle">
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carouserStyle">
                    <img
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}
export default Hero