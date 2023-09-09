import React, { useEffect, useState } from "react";
import { Card, CardGroup, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const QuizCards = () => {
  return (
    <Container className="my-4">
        <Row className="justify-content-md-center">
            <Col md={6}>
                <Card style={{ margin: "10px" }}>
                    <Card.Img variant="top" className="h-[22rem]" src= "src\assets\Web.jpg"/>
                    <Card.Body className="h-full">
                    <Card.Text className="fst-italic md:text-lg capitalize text-sm">
                        <strong className="px-2">Title:</strong>
                        <br />
                        <strong className="px-2">Author:</strong>
                        <br />
                        <strong className="px-2">Genre:</strong>
                        <br />
                        <strong className="px-2">Description:</strong>
                    </Card.Text>
                    </Card.Body>
                    <div className="mb-3 mx-auto">
                        <Button variant="outline-success">Take Quiz</Button>
                    </div>
                </Card>
            </Col>
            <Col md={6}>
                <Card style={{ margin: "10px" }}>
                    <Card.Img variant="top" className="h-[22rem]" src= "src\assets\AI.jpeg"/>
                    <Card.Body className="h-full">
                    <Card.Text className="fst-italic md:text-lg capitalize text-sm">
                        <strong className="px-2">Title:</strong>
                        <br />
                        <strong className="px-2">Author:</strong>
                        <br />
                        <strong className="px-2">Genre:</strong>
                        <br />
                        <strong className="px-2">Description:</strong>
                    </Card.Text>
                    </Card.Body>
                    <div className="mb-3 mx-auto">
                        <Button variant="outline-success">Take Quiz</Button>
                    </div>
                </Card>
            </Col>
        </Row>
        <Row className="justify-content-md-center">
            <Col md={6}>
                <Card style={{ margin: "10px" }}>
                    <Card.Img variant="top" className="h-[22rem]" src= "src\assets\cybersecurity.png"/>
                    <Card.Body className="h-full">
                    <Card.Text className="fst-italic md:text-lg capitalize text-sm">
                        <strong className="px-2">Title:</strong>
                        <br />
                        <strong className="px-2">Author:</strong>
                        <br />
                        <strong className="px-2">Genre:</strong>
                        <br />
                        <strong className="px-2">Description:</strong>
                    </Card.Text>
                    </Card.Body>
                    <div className="mb-3 mx-auto">
                        <Button variant="outline-success">Take Quiz</Button>
                    </div>
                </Card>
            </Col>
            <Col md={6}>
                <Card style={{ margin: "10px" }}>
                    <Card.Img variant="top" className="h-[22rem]" src= "src\assets\DBMS.png"/>
                    <Card.Body className="h-full">
                    <Card.Text className="fst-italic md:text-lg capitalize text-sm">
                        <strong className="px-2">Title:</strong>
                        <br />
                        <strong className="px-2">Author:</strong>
                        <br />
                        <strong className="px-2">Genre:</strong>
                        <br />
                        <strong className="px-2">Description:</strong>
                    </Card.Text>
                    </Card.Body>
                    <div className="mb-3 mx-auto">
                        <Button variant="outline-success">Take Quiz</Button>
                    </div>
                </Card>
            </Col>
        </Row>
           
    </Container>
    
  );
};

export default QuizCards;
