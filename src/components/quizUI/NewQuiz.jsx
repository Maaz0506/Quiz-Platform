import { useState, useEffect } from "react";
import Header from "../dashboard/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faHistory,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Result from "../Result";
const token = localStorage.getItem("accessToken");
const NewQuiz = () => {
  const [questions, setQuestions] = useState([]);
  const [options, setOptions] = useState([]);
  const [questionOptionMapping, setQuestionOptionMapping] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [quizCompleted, setQuizCompleted] = useState(false);
  // const [selectedAnswers, setSelectedAnswers] = useState({});
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [
    hasAttemptedNextWithoutSelection,
    setHasAttemptedNextWithoutSelection,
  ] = useState(false);

  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedQs = await axios.get(
          "http://localhost:4000/api/question/1",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const fetchedOptions = await axios.get(
          "http://localhost:4000/api/answer/1",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setQuestions(fetchedQs.data);
        setOptions(fetchedOptions.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [token]);
  useEffect(() => {
    const mapping = {};
    questions.forEach((question) => {
      const matchingOptions = options.filter(
        (option) => option.questionId === question.questionId
      );
      mapping[question.questionId] = {
        question,
        options: matchingOptions,
      };
    });
    setQuestionOptionMapping(mapping);
  }, [questions, options]);

  const handleNext = () => {
    console.log(currentQuestionIndex, questions.length);
    if (currentQuestionIndex < questions.length - 1) {
      if (selectedAnswer === null) {
        alert("Attemped without selecting an option ");
        setHasAttemptedNextWithoutSelection(true);
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        questions.forEach((question) => {
          const correctOption = questionOptionMapping[
            question.questionId
          ].options.find((option) => option.isCorrect === true);
          console.log(selectedAnswer === correctOption.isCorrect.toString());
          if (selectedAnswer === correctOption.isCorrect.toString()) {
            setScore(score + 5);
            console.log(score);
          }
        });
      }
    } else {
      // Calculate the score when all questions are answered
      const lastQuestion = questions[currentQuestionIndex];
      const lastQuestionCorrectOption = questionOptionMapping[
        lastQuestion.questionId
      ].options.find((option) => option.isCorrect === true);

      if (selectedAnswer === lastQuestionCorrectOption.isCorrect.toString()) {
        setScore(score + 5);
      }

      setQuizCompleted(true);
    }
  };
};

const handleResult = () => {
  const correctQuestions = [];
  const wrongQuestions = [];
  for (i = 0; i < questions.length - 1; i++) {
    if (selectedAnswer !== null) {
      if (selectedAnswer === correctOption.isCorrect.toString()) {
        correctQuestions.push(questions[i]);
      } else {
        wrongQuestions.push(questions[i]);
      }
    }
  }
  return { wrongQuestions, correctQuestions };
};

const { correctQuestions, wrongQuestions } = handleResult();

const showResult = () => {
  return <Result />;
};

console.log("Selected Answer" + selectedAnswer);
// };
const currentQuestion = questions[currentQuestionIndex];
const currentQuestionData = questionOptionMapping[currentQuestion?.questionId];
// console.log(currentQuestionData)
return (
  <>
    <Header />
    <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
      {isLoading ? (
        <p className="text-2xl text-gray-700 shadow-md p-4 rounded-md bg-white">
          Loading...
        </p>
      ) : currentQuestionData && !quizCompleted ? (
        <div className="bg-white p-4 rounded-md shadow-md ">
          <p>
            Question {currentQuestionIndex + 1} out of {questions.length}
          </p>
          <div key={currentQuestion.questionId}>
            <p className="text-lg font-semibold text-gray-800">
              {currentQuestion.questionText}
            </p>
            <ul className="mt-4">
              {currentQuestionData.options.map((option) => (
                <label
                  key={option.answerId}
                  className="block mb-2 text-gray-700 hover:text-blue-600"
                >
                  <input
                    type="radio"
                    name={`question${currentQuestion.questionId}`}
                    value={option.isCorrect === true}
                    onChange={(e) => setSelectedAnswer(e.target.value)}
                    className="mr-2"
                  />
                  {option.answerText}
                </label>
              ))}
            </ul>
          </div>
          <button
            onClick={handleNext}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600"
          >
            Next
          </button>
        </div>
      ) : (
        quizCompleted && (
          <div className="text-center mt-4">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-green-500 text-4xl mb-2"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold text-gray-800">
              Quiz Completed!
            </p>
            <div className="mt-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mr-2">
                <FontAwesomeIcon icon={faHistory} className="mr-2" /> View
                History
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                onClick={() => alert("Your score is:" + score)}
              >
                <FontAwesomeIcon icon={faChartBar} className="mr-2" /> View
                Score
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                onClick={showResult}
              >
                <FontAwesomeIcon icon={faChartBar} className="mr-2" /> View Show
                Result
              </button>
            </div>
          </div>
        )
      )}
      <Result
        correctQuestions={correctQuestions}
        wrongQuestions={wrongQuestions}
        questionId={question.questionId}
      />
    </div>
  </>
);

export default NewQuiz;
