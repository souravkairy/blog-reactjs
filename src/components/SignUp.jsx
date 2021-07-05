import React, { useState, useEffect } from 'react'
import { Container, Col, Row, Card, Button, Image, Form } from 'react-bootstrap'
import image from '../assets/img/signup.png'
import css from '../assets/css/index.css'
import App_url from '../rest_api/App_url'
import { useHistory } from 'react-router-dom'

function SignUp() {
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history.push("/")
        }

    }, [])

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

    async function SignUp() {
        let obj = { name, email, phone, password };
        let result = await fetch(App_url.userSighUp,
            {
                method: 'POST',
                body: JSON.stringify(obj),
                headers: {
                    "Content-Type": 'application/x-www-form-urlencoded',
                    "Accept": 'application/json'
                }
            })
        result = await result.json()
        localStorage.setItem("user-info", JSON.stringify(result))
        history.push("/")

    }

    return (
        <>
            <Container>
                <Row className="d-flex align-items-center signInsection">
                    <Col lg={6} md={6} sm={12}>
                        <h1>Sign-Up</h1>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control type="text" placeholder="Enter Mobile Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="I agree with terms & conditions" />
                            </Form.Group>
                            <Button onClick={SignUp} variant="warning">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <Image className="float-right" src={image} />
                    </Col>
                </Row>
            </Container>

        </>
    )
}
export default SignUp