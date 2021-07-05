import React, { useState, useEffect } from 'react'
import { Container, Col, Row, Card, Button, Form, Toast,Image } from 'react-bootstrap'
import App_url from '../rest_api/App_url'
import image from '../assets/img/profile.svg'
function BlogDetails() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
    }, [])
    let blog_info = JSON.parse(localStorage.getItem('blog-details'))
    let user = JSON.parse(localStorage.getItem('user-info'))

    const [content, setContent] = useState("")
    const blog_id = blog_info && blog_info[0]['id']
    const user_id = user && user[0]['id']
    const user_name = user && user[0]['name']
    async function SavaData() {
        console.warn(content)
        const formData = new FormData();
        formData.append('comment', content);
        formData.append('user_id', user_id);
        formData.append('user_name', user_name);
        formData.append('blog_id', blog_id);
        let result = await fetch(App_url.addComment,
            {
                method: 'POST',
                body: formData
            });
        getData();
    }
    async function getData() {
        let result = await fetch("http://127.0.0.1:8000/getCommentByBlog/" + blog_id);
        result = await result.json();
        setData(result)
    }
    return (
        <>
            <Container className="blog_section">
                <Row className="">
                    <Col lg={12} md={12} sm={12} className="">
                        <Row>
                            <Card border="warning" className="mt-3 blogdata">
                                <Card.Img variant="top" src={"http://127.0.0.1:8000/" + blog_info[0]['Image']} />
                                <Card.Body>
                                    <Card.Title>{blog_info && blog_info[0]['name']}</Card.Title>
                                    <Card.Text>
                                        {blog_info && blog_info[0]['content']}
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Row>
                    </Col>
                    {
                        localStorage.getItem('user-info') ?
                            <>
                                <Col lg={5} md={12} sm={12} className="mt-5">
                                    {
                                        data.map((item) =>
                                            <Toast className="">
                                                <Toast.Body><Image className="headerProfileImage pr-2" src={image}/>
                                                     <strong className="">{item.user_name}: {item.comment}</strong></Toast.Body>
                                            </Toast>
                                        )
                                    }
                                </Col>
                                <Col lg={6} md={12} sm={12} className="mt-5">
                                    <Form className="">
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Comment Box</Form.Label>
                                            <Form.Control as="textarea" rows={3} onChange={(e) => setContent(e.target.value)} />
                                        </Form.Group>
                                        <Button variant="primary" type="submit" onClick={SavaData}>
                                            Submit
                                        </Button>
                                    </Form>
                                </Col>
                            </>
                            :
                            <>
                            </>
                    }

                </Row>
            </Container>
        </>
    )
}

export default BlogDetails