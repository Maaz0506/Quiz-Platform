import {  useEffect,useState } from "react";
// import DataContext from "../../../context/DataContext";
import Header from "../dashboard/Header";
import axios from "axios";
import { Button } from "react-bootstrap";
const token=localStorage.getItem("accessToken")
const QuizUI = () => {
  const [questionAnswer, setQuestionAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    const handleResults=async()=>{
      try {
        const data=await axios.get("http://localhost:4000/api/question/questionWithAnswer?quizId=1",{headers:{Authorization:`Bearer ${token}`}})
        setQuestionAnswers(data.data)
        setCurrentQuestion(data.data[0])
        setLoading(false)
        
        
      } catch (error) {
        console.log(error)
      }
    }
    handleResults()
  },[token])
  
  // const currentQ = [currentQuestion[currentQuestionIndex]];
  // console.log(currentQ,currentQ.length)
console.log(currentQuestion)
  const handleNextQuestion = () => {
    // Check if there are more questions to display
    
    if (currentQuestionIndex < questionAnswer.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentQuestion(questionAnswer[currentQuestionIndex + 1]); // Set the next question as the current question

    } else {
      // Handle end of quiz (e.g., display results or a completion message)
      console.log("End of quiz");
    }
  };

  return (
    <>
  <Header/>

  {loading && currentQuestion===null?(
    <p>Fetching Data</p>
  ):currentQuestion!==null?( <div>
    <h2>Quiz</h2>
     <p>Question {currentQuestionIndex + 1} out of {questionAnswer.length}</p>
     <p>{currentQuestion[currentQuestionIndex].questionText}</p> 
    <ul>
    <li>
          <label>
            <input
              type="radio"
              value={currentQuestion[currentQuestionIndex].option1}
              name="answer"
              checked={selectedAnswer === currentQuestion.option1}
              onChange={() => setSelectedAnswer(currentQuestion.option1)}
            />
            {currentQuestion[currentQuestionIndex].option1}
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              value={currentQuestion[currentQuestionIndex].option2}
              name="answer"
              checked={selectedAnswer === currentQuestion.option2}
              onChange={() => setSelectedAnswer(currentQuestion.option2)}
            />
            {currentQuestion[currentQuestionIndex].option2}
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              value={currentQuestion[currentQuestionIndex].option3}
              name="answer"
              checked={selectedAnswer === currentQuestion.option3}
              onChange={() => setSelectedAnswer(currentQuestion.option3)}
            />
            {currentQuestion[currentQuestionIndex].option3}
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              value={currentQuestion[currentQuestionIndex].option4}
              name="answer"
              checked={selectedAnswer === currentQuestion.option4}
              onChange={() => setSelectedAnswer(currentQuestion.option4)}
            />
            {currentQuestion[currentQuestionIndex].option4}
          </label>
        </li>
      
        </ul>  
        <button onClick={handleNextQuestion}>Next</button>
    </div>
    ):null
} 
    
    </>
    
  );
};




export default QuizUI;
