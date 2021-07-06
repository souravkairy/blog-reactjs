import React, { useState, useEffect } from 'react'
import { Container, Col, Row, Card, Button, Image, Table, Modal, Form } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

function Editblog(props) {
    console.warn("props",props.match.params.id)
    const [data, setData] = useState([]);
    useEffect(async () => {
        let result = await fetch("http://127.0.0.1:8000/getBlogByidForEdit/" + props.match.params.id);
        result = await result.json();
        setData(result)
    }, [])
  
    return (
        <>
            <Container>
                <Row className="signInsection">
                    <Col lg={8} md={12} sm={12}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter Title" defaultValue={data.name} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Content</Form.Label>
                                <Form.Control as="textarea" rows={3} defaultValue={data.content}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="file" placeholder="Add Image"/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default withRouter(Editblog)