import React, { useState,useEffect } from 'react'
import { Container, Col, Row, Card, Button, Image, Table } from 'react-bootstrap'
import image from '../assets/img/profile.svg'
import image1 from '../assets/img/eye.svg'
import image2 from '../assets/img/edit.svg'
import image3 from '../assets/img/trash.svg'
import css from '../assets/css/index.css'
import {NavLink} from 'react-router-dom'
import App_url from '../rest_api/App_url'

function Alluser(){
        const [data, setData] = useState([]);
        useEffect(async () => {
            let result = await fetch(App_url.allUser);
            result = await result.json();
            setData(result)
        },[])
        console.warn("result",data)
        return (
            <>
                <Container>
                    <Row className="signInsection">
                        <Col lg={12} md={12} sm={12}>
                            <h1>All Users</h1>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th style={{ width: "5%" }}>#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Mobile</th>
                                        <th style={{ width: "10%" }}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((item)=>
                                        <tr>
                                        <td>1</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>
                                        <NavLink to="/myProfile"><Image className="tblImage" src={image1} /></NavLink>
                                        </td>
                                    </tr>
                                    )}
                                  
                                </tbody>
                            </Table>
                        </Col>

                    </Row>
                </Container>
            </>
        )
    
}

export default Alluser
