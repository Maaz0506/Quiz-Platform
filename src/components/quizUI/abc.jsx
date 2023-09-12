
//   useEffect(()=>{
//     const handleQuestions=async()=>{
      
//       try {
//         const url="http://localhost:4000/api/question/questionWithAnswer"
//         const data=await axios.get(url,{headers:{Authorization:token}})
//         setQuestions(data.data)
//         setUsedIndices([]); // Reset usedIndices when fetching new questions
//         selectRandomQuestion(data.data);
//       } catch (error) {
//         console.log(error)
        
//       }
//     }
//     handleQuestions()
//   },[token])

//   const selectRandomQuestion=(quizData)=>{
//     const unusedIndices = quizData.map((_, index) => index).filter((index) => !usedIndices.includes(index));

//     if (unusedIndices.length === 0) {
//       console.log("Quiz completed!");
//     } else {
//       // Randomly select an unused index
//       const randomIndex = unusedIndices[Math.floor(Math.random() * unusedIndices.length)];
//       setCurrentQuestionIndex(randomIndex);
//     }
//   }
//   const handleNextQuestion = () => {
//     if (selectedOption !== null) {
//       // Mark the current index as used
//       setUsedIndices([...usedIndices, currentQuestionIndex]);

//       // Select the next random question
//       selectRandomQuestion(questions);

//       setSelectedOption(null);
//     } else {
//       alert("Please select an option before moving to the next question.");
//     }
//   };
// console.log(questions,currentQuestionIndex)
//   let currentQuestion = questions[currentQuestionIndex];
//   currentQuestion=[currentQuestion]
//   console.log(currentQuestion)



const questions = [
    //     {
    //       questionId: 1,
    //       questionText: "HTML",
    //     },
    //     {
    //       questionId: 2,
    //       questionText: "JSON",
    //     },
    //     {
    //       questionId: 3,
    //       questionText: "jajaja",
    //     },
    //   ];
    //   const options = [
    //     {
    //       questionId: 1,
    //       answerId: 1,
    //       answerText: "HyperText",
    //       isCorrect: 1,
    //     },
    //     {
    //       questionId: 1,
    //       answerId: 2,
    //       answerText: "HyperText",
    //       isCorrect: 1,
    //     },
    //     {
    //       questionId: 1,
    //       answerId: 3,
    //       answerText: "JWT",
    //       isCorrect: 0,
    //     },
    //     {
    //       questionId: 2,
    //       answerId: 1,
    //       answerText: "Java",
    //       isCorrect: 1,
    //     },
    //     {
    //       questionId: 2,
    //       answerId: 2,
    //       answerText: "js",
    //       isCorrect: 1,
    //     },
    //     {
    //       questionId: 3,
    //       answerId: 2,
    //       answerText: "nahi pta",
    //       isCorrect: 1,
    //     },
    //   ];