import  {  useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { Link } from "react-router-dom";
// import LoginContext from "../../context/LoginContext";

const QuizCards = () => {
  const [typeData, setTypeData] = useState([]);
  
  const token=localStorage.getItem("accessToken")
  
  useEffect(()=>{
    const url = "http://localhost:4000/api/type/getTypes";
    const handleQuizData = async () => {
      try {
        const data = await axios.get(url, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTypeData(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    handleQuizData();
  },[token])
   
  return (
    <Container className="my-8 grid grid-cols-2 ">
      {typeData.map((type) => (
        <>
          <Row className="justify-content-md-center" key={type.quizId}>
            <Col md={6} key={type.quizId}>
              <Card style={{ margin: "10px",width:"400px"}}>
                <Card.Img
                  variant="top"
                  className="h-[22rem]"
                  src={type.imageUrl}
                />
                <Card.Body className="h-[250px] ">
                  <Card.Text className="fst-italic md:text-lg capitalize text-sm ">
                    <strong className="">Title:</strong>
                    <span> {type.quizName}</span>
                    <br />
                    <strong className="">No of questions:</strong>
                    <span> 10</span>
                    <br />
                    <strong className="">Difficulty Level:</strong>
                    <span> Intermediate</span>
                    <br />
                    <strong className="">Description:</strong>
                    <span> {type.description}</span>
                  </Card.Text>
                </Card.Body>
                <div className="mb-3 mx-auto">
                  <Link to={"/quizUI"} className="bg-green-400 py-2 text-lg px-2 rounded-lg hover:bg-green-300">Take Quiz</Link>
                </div>
              </Card>
            </Col>
          </Row>
        </>
      ))}
    </Container>
  );
};

export default QuizCards;
