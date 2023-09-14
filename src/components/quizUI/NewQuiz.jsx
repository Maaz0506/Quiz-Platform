import { useState, useEffect } from "react";
import Header from "../dashboard/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faHistory,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { data } from "autoprefixer";
const token = localStorage.getItem("accessToken");
const NewQuiz = () => {
  const email = localStorage.getItem("email");
  const quizId = localStorage.getItem("quizId");
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [options, setOptions] = useState([]);
  const [correctQuestions, setCorrectQuestions] = useState([]);
  const [wrongQuestions, setWrongQuestions] = useState([]);
  const [questionOptionMapping, setQuestionOptionMapping] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [
    hasAttemptedNextWithoutSelection,
    setHasAttemptedNextWithoutSelection,
  ] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedQs = await axios.get(
          `http://localhost:4000/api/question/${quizId}`
        );
        const fetchedOptions = await axios.get(
          `http://localhost:4000/api/answer/${quizId}`
        );
        setQuestions(fetchedQs.data);
        setOptions(fetchedOptions.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [quizId]);

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
    if (selectedAnswer === null) {
      alert("Attempted without selecting an option");
      setHasAttemptedNextWithoutSelection(true);
      return; // Stop here, don't proceed to the next question
    }

    if (currentQuestionIndex < questions.length - 1) {
      questions.forEach((question) => {
        const correctOption = questionOptionMapping[
          question.questionId
        ].options.find((option) => option.isCorrect === true);

        if (selectedAnswer === correctOption.isCorrect.toString()) {
          setCorrectQuestions([...correctQuestions, currentQuestion]);
          setScore(score + 5);
        } else {
          setWrongQuestions([...wrongQuestions, currentQuestion]);
        }
      });
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const lastQuestion = questions[currentQuestionIndex];
      const lastQuestionCorrectOption = questionOptionMapping[
        lastQuestion.questionId
      ].options.find((option) => option.isCorrect === true);

      if (selectedAnswer === lastQuestionCorrectOption.isCorrect.toString()) {
        setScore(score + 5);
        setCorrectQuestions([...correctQuestions, currentQuestion]);
        setQuizCompleted(true);
      } else {
        setWrongQuestions([...wrongQuestions, currentQuestion]);
        const handleScore = async () => {
          try {
            const data = await axios.post(
              "http://localhost:4000/api/score/addScore",
              {
                quizId: quizId, // Include any necessary data in the request
                score: score,
                email: email,
                // Include other relevant data as needed
              },
              { headers: { Authorization: `Bearer ${token}` } }
            );
            console.log(data.data);
          } catch (error) {
            console.log(error);
          }
        };
        handleScore();
        setQuizCompleted(true);
      }
    }

    setSelectedAnswer(null);
  };

  console.log(correctQuestions);
  console.log(wrongQuestions);

  const currentQuestion = questions[currentQuestionIndex];
  const currentQuestionData =
    questionOptionMapping[currentQuestion?.questionId];

  const handleRetryQuiz = () => {
    // Reset relevant state variables here
    setQuestions([]);
    setOptions([]);
    setCorrectQuestions([]);
    setWrongQuestions([]);
    setQuestionOptionMapping({});
    setCurrentQuestionIndex(0);
    setIsLoading(true);
    setQuizCompleted(false);
    setSelectedAnswer(null);
    setScore(0);

    localStorage.removeItem("quizId");
    navigate("/dashboard");
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-start py-10 justify-center bg-gray-100 ">
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
                      // disabled={}
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
        ) : quizCompleted && buttonClicked === false ? (
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
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                onClick={() => setButtonClicked(true)}
              >
                <FontAwesomeIcon icon={faChartBar} className="mr-2" /> Show
                Result
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white p-4 rounded-md shadow-md ">
            <h1 className="text-lg font-bold mb-4 text-right">
              <span className="font-medium">Total Score :</span> {score}/
              {questions.length * 5}
            </h1>
            <div className="grid grid-cols-1 gap-8">
              {correctQuestions.map((question, index) => (
                <div key={`correct-${index}`} className="bg-green-100 p-4">
                  <div className="flex justify-end">
                    <p className="font-semibold text-black rounded-xl py-2 px-2 bg-green-400">
                      5/5 points{" "}
                    </p>
                  </div>
                  <p className="text-lg font-bold">Correct</p>
                  <p className="text-sm">{question.questionText}</p>
                </div>
              ))}
              {wrongQuestions.map((question, index) => (
                <div key={`wrong-${index}`} className="bg-red-100 p-4">
                  <div className="flex justify-end">
                    <p className="font-semibold text-black rounded-xl py-2 px-2 bg-red-400">
                      0/5 points{" "}
                    </p>
                  </div>
                  <p className="text-lg font-bold">Wrong</p>
                  <p className="text-sm">{question.questionText}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center  items-center h-16">
              <button
                onClick={handleRetryQuiz}
                className="py-2 px-2 bg-green-400 rounded-md font-semibold  text-black text-lg hover:bg-green-300 "
              >
                Retry Quiz
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default NewQuiz;
