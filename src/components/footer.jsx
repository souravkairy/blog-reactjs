import React, { Component } from 'react'
import { Container, Navbar, Button, Col, Row, Card, Pagination } from 'react-bootstrap'

class Footer extends Component {
    render() {
        return (
            <>
                <Container fluid={true} expand="lg" bg="dark" variant="dark">
                    <Row className="footerSection d-flex align-items-center">
                        <Col lg={4} md={4} sm={12} className="">
                            <h3>Logo Two</h3>
                            <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur</p>

                        </Col>
                        <Col lg={5} md={4} sm={12}>
                            <h3>Quick Links</h3>
                            <h6>Home</h6>
                            <h6>Home</h6>
                            <h6>Home</h6>
                            <h6>Home</h6>
                        </Col>
                        <Col lg={3} md={4} sm={12} className="">
                                <p>18/A Housing Estate</p>
                                <p>Dhaka-1292</p>
                                <p>sourav@gmail.com</p>
                                <p>01997338420</p>
                                <h6>&copy; Copyright 2021 Technext Limited</h6>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
export default Footer