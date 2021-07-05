import React, { Component } from 'react'
import { Container, Col, Row, Card, Button, Image } from 'react-bootstrap'
import image from '../assets/img/blog.png'
import css from '../assets/css/index.css'

const Hero = () => (
    <>
        <Container fluid={true}>
            <Row className="d-flex align-items-center hero_section">
                <Col lg={6} md={6} sm={12}>
                    <h1>Example heading</h1>
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quia Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Architecto quia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quia,,</p>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <Image className="float-right mbl_version" src={image} />
                </Col>
            </Row>
        </Container>
    </>
)
export default Hero