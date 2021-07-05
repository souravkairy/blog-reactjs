import React, { Component } from 'react'
import { Container, Nav, Navbar, NavDropdown, Button, Image } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import image from '../assets/img/profile.svg'

function Header(){
     
        return (
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <NavLink to="/"> <Navbar.Brand href="#home">PRACTICE-BLOG</Navbar.Brand></NavLink>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                            <Nav className="me-auto">
                                {
                                    localStorage.getItem('user-info') ?
                                        <>
                                            <Nav.Link><NavLink to="/allUser"><Button variant="secondary"> All User</Button></NavLink></Nav.Link>
                                            <Nav.Link ><NavLink to="/myProfile"><Image className="headerProfileImage" src={image} /></NavLink></Nav.Link>
                                        </>
                                        :
                                        <>
                                            <Nav.Link ><NavLink to="/signIn"><Button variant="secondary">Sign-In</Button></NavLink></Nav.Link>
                                            <Nav.Link ><NavLink to="/signUp"><Button variant="warning">Sign-Up</Button></NavLink></Nav.Link>
                                        </>
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
    }

export default Header