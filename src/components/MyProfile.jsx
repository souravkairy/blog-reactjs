import React, { useState, useEffect } from 'react'
import { Container, Col, Row, Card, Button, Image, Table, Modal, Form } from 'react-bootstrap'
import pFimage from '../assets/img/profile.svg'
import image1 from '../assets/img/eye.svg'
import image2 from '../assets/img/edit.svg'
import image3 from '../assets/img/trash.svg'
import css from '../assets/css/index.css'
import { useHistory } from 'react-router-dom'
import App_url from '../rest_api/App_url'
import { NavLink } from 'react-router-dom'


function MyProfile() {

    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
    }, [])

    //modal
    const [show, setShow] = useState(false);
    const [editshow, seteditShow] = useState(false);
   

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false); //modal close function
    const edithandleShow = () => seteditShow(true);
    const edithandleClose = () => seteditShow(false); //modal close function

    const history = useHistory()
    function logout() {
        localStorage.clear();
        history.push("/")
    }
    let user = JSON.parse(localStorage.getItem('user-info'))

    //add data
    const [name, setName] = useState("")
    const [content, setContent] = useState("")
    const [image, setImage] = useState("")
    const user_id = user && user[0]['id']
    async function SavaData() {
        // console.warn(name,image,content)
        const formData = new FormData();
        formData.append('name', name);
        formData.append('image', image);
        formData.append('content', content);
        formData.append('user_id', user_id);

        let result = await fetch(App_url.addBlog,
            {
                method: 'POST',
                body: formData
            });
        getData();
        setShow(false); //modal
    }
    //delete data

    async function deleteOperation(id) {
        let result = await fetch("http://127.0.0.1:8000/deleteBlog/" + id,
            {
                method: 'POST'
            });
        result = await result.json();
        console.warn(result)
        getData();


    }
    async function getData() {
        let result = await fetch("http://127.0.0.1:8000/BlogListByPf/" + user_id);
        result = await result.json();
        setData(result)
    }
    async function getblog(id) {
        let result = await fetch("http://127.0.0.1:8000/getBlog/" + id,
            {
                method: 'GET'
            });
        result = await result.json();
        console.warn(result)
        localStorage.setItem("blog-details", JSON.stringify(result))
        history.push("/blogDetails")
    }
    // const [foreditdata, editdata] = useState([]);
    // async function editblog(id) {
        
    //     let result = await fetch("http://127.0.0.1:8000/getBlogByid/" + id,
    //         {
    //             method: 'GET'
    //         });
    //         result = await result.json();
    //         editdata(result)
    //         console.warn(foreditdata)
    //         edithandleShow()
    // }
    return (
        <>
            <Container>
                <Row className="signInsection">
                    <Col lg={3} md={4} sm={12}>
                        <Card className="profileCard text-center">
                            <Card.Img variant="top" src={pFimage} />
                            <Card.Body>
                                <Card.Title>{user && user[0]['name']}</Card.Title>
                                <Card.Text>
                                    {user && user[0]['email']}
                                </Card.Text>
                                <Button variant="danger" onClick={logout}>Log-Out</Button>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={9} md={8} sm={12}>
                        <h1 className="float-left">Total Blogs</h1>
                        <Button variant="secondary" className="float-right" onClick={handleShow}>
                            Add Content
                        </Button>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th style={{ width: "5%" }}>#</th>
                                    <th>Title</th>
                                    <th style={{ width: "10%" }}>Image</th>

                                    <th style={{ width: "20%" }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((item) =>
                                        <tr>
                                            <td>1</td>
                                            <td>{item.name}</td>
                                            <td><Image className="w-50" src={"http://127.0.0.1:8000/" + item.Image} /></td>
                                            <td>
                                                <span type="button" onClick={() => getblog(item.id)}><Image className="tblImage" src={image1} /></span>
                                                {/* <span type="button" onClick={() => editblog(item.id)}><Image className="tblImage" src={image2} /></span> */}
                                                <span type="button"><Image className="tblImage" src={image2} /></span>
                                                <span type="button" onClick={() => deleteOperation(item.id)}> <Image className="tblImage" src={image3} /></span>
                                            </td>
                                        </tr>
                                    )
                                }

                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
            <Modal show={show} onHide={handleClose}>
                <Form>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Blog</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter Title" onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Content</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={(e) => setContent(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="file" placeholder="Add Image" onChange={(e) => setImage(e.target.files[0])} />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={SavaData}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
            <Modal show={editshow} onHide={edithandleClose}>
                <Form>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Blog Post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            {/* <Form.Control type="text" placeholder="Enter Title" defaultValue={foreditdata[0]['name']} /> */}
                            <Form.Control type="text" placeholder="Enter Title" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Content</Form.Label>
                            <Form.Control as="textarea" rows={3}  />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="file" placeholder="Add Image"/>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={edithandleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={SavaData}>
                            Update
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>

        </>
    )
}
export default MyProfile