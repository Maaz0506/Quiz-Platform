import React from "react";

const Result = (props) => {
  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Quiz Results</h1>
      <div className="grid grid-cols-1 gap-4">
        {props.correctQuestions.map((question, key) => (
          <div key={props.questionId} className="bg-green-100 p-4">
            <p className="text-lg font-bold">Correct</p>
            <p className="text-sm">{question}</p>
          </div>
        ))}
        {props.wrongQuestions.map((question, key) => (
          <div key={props.questionId} className="bg-red-100 p-4">
            <p className="text-lg font-bold">Wrong</p>
            <p className="text-sm">{question}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Result;
