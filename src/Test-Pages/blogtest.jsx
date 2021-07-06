import React, { useEffect,useState } from 'react'
import { Container, Col, Row, Card, Button, Pagination } from 'react-bootstrap'
import image from '../assets/img/download.svg';
import {NavLink} from 'react-router-dom'
import App_url from '../rest_api/App_url'
import { useHistory } from 'react-router-dom'

function Blog(){
    const [data, setData] = useState([]);
    const history = useHistory()
    useEffect(async() => {
        let result = await fetch(App_url.GetAllBlog);
        result = await result.json();
        setData(result)
    }, [])

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

        return (
            <>
                <Container className="blog_section">
                    <Row className="justify-content-center">
                        <Col lg={12} md={12} sm={12}>
                            <h1 className="text-center pb-5">Articles</h1>
                        </Col>
                        {
                             data.map((item) =>
                             <Col lg={4} md={6} sm={12}>
                             <Row className="text-center">
                                 <Card border="warning" className="mt-3 blogdata">
                                     <Card.Img variant="top" src={"http://127.0.0.1:8000/" + item.Image} />
                                     <Card.Body>
                                         <Card.Title>{item.name}</Card.Title>
                                         <Card.Text>
                                            {item.content}
                                         </Card.Text>
                                        <Button variant="primary" onClick={() => getblog(item.id)}>Know More</Button>
                                        {/* <Link to={"/blog-details/"+item.id}>Know More</Link> */}
                                     </Card.Body>
                                 </Card>
                             </Row>
                         </Col>
                          )}
                  
                 
                    
                        <Col lg={12} md={12} sm={12} className="mt-5">
                            <Pagination className="float-right">
                                <Pagination.First />
                                <Pagination.Prev />
                                <Pagination.Item>{1}</Pagination.Item>
                                <Pagination.Item>{2}</Pagination.Item>
                                <Pagination.Next />
                                <Pagination.Last />
                            </Pagination>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }

export default Blog