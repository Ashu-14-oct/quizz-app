"use client"
import React, { useState } from "react";

const Quizz = () => {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["Elephant", "Giraffe", "Whale Shark", "Hippopotamus"],
      correctAnswer: "Whale Shark",
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Leo Tolstoy"],
      correctAnswer: "William Shakespeare",
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Go", "Au", "Ag", "Fe"],
      correctAnswer: "Au",
    },
    {
      question: "Which gas do plants absorb from the atmosphere?",
      options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
      correctAnswer: "Carbon Dioxide",
    },
    {
      question: "In which year did Christopher Columbus discover America?",
      options: ["1492", "1620", "1776", "1812"],
      correctAnswer: "1492",
    },
    {
      question: "What is the tallest mountain in the world?",
      options: ["Mount Kilimanjaro", "Mount Fuji", "Mount Everest", "Mount McKinley"],
      correctAnswer: "Mount Everest",
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "India", "Japan", "South Korea"],
      correctAnswer: "Japan",
    },
    {
      question: "Who painted the 'Mona Lisa'?",
      options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
      correctAnswer: "Leonardo da Vinci",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [startButton, setStartButton] = useState(false);

  const handleStartButton = () => {
    setStartButton(true);
  };
  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };
  return (
    <div className="flex justify-center h-full">
      {startButton ? (
        <div className="quiz-container mt-5 p-4 border rounded-lg shadow-lg bg-white">
          {showScore ? (
            <div className="quiz-score text-center">
              <p className="text-2xl font-bold">
                You scored {score} out of {questions.length}
              </p>
              <button
                onClick={resetQuiz}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
              >
                Try Again
              </button>
            </div>
          ) : (
            <div className="question-container">
              <h3 className="text-2xl font-bold mb-4">
                Question {currentQuestion + 1}
              </h3>
              <p className="text-lg">{questions[currentQuestion].question}</p>
              <div className="options mt-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(option)}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-full mr-4 mb-2"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="mt-40">
          <div>
            <p className="text-2xl ml-5">Do you want to take Quizz?</p>
          </div>
          <br />
          <div className="ml-20">
            {" "}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full border shadow-lg w-40 h-20"
              onClick={handleStartButton}
            >
              Start
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quizz;
