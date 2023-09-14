import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Header from "../dashboard/Header";
const quizId = localStorage.getItem("quizId");
const email = localStorage.getItem("email");
function History() {
  const [scores, setScores] = useState([]);
  const [quizName, setQuizName] = useState([]);
  const [isLoading,setIsLoading]=useState(true)
  useEffect(() => {
    const handleScores = async () => {
      try {
        const fetchedScores = await axios.get(
          `http://localhost:4000/api/score/${email}`
        );
        const fetchedQuizName = await axios.get(
          `http://localhost:4000/api/type/${quizId}`
        );
        setScores(fetchedScores.data);
        // console.log(scores)
        setQuizName(fetchedQuizName.data)
        setIsLoading(false)
      } catch (error) {
        console.log(error);
      }
    };
    handleScores();
  },[]);
  
  // if(!isLoading){

  //   // var handleQuizName=quizName.m)
  //   console.log(handleQuizName)
  // }

  return (
    
    <>
    <Header/>

    <Container className="bg-red-500 ">
      <Table striped className="my-6 ">
        <thead>
          <tr>
            <th>#</th>
            <th>UserID</th>
            <th>QuizName</th>
            <th>Score</th>
            <th>Played On</th>
          </tr>
        </thead>
        <tbody>
          {(isLoading && scores.length===1)? (

          <tr>
            <td>1</td>
            <td>{email}</td>
            <td>{quizName.quizName}</td>
            <td>{scores.score}</td>
            <td>{scores.createdAt.substring(0,8)}</td>
          </tr>
          ):(
            scores.map((score,index)=>(
              <tr key={index}>
            <td>{index+1}</td>
            <td>{email}</td>
            {quizName.map((quiz,index)=>(
              <td key={index}>{quiz.quizName}</td>
            ))}
            <td>{score.score}</td>
            <td>{score.createdAt.substring(0,10)}</td>
          </tr>
            ))

          )}
      
      </tbody>
      
        
      </Table>
    </Container>
    </>
  );
}

export default History;
