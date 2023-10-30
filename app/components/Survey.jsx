"use client";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';

const Survey = () => {
  const [answers, setAnswers] = useState({});
  const [completed, setCompleted] = useState(false);

  const router = useRouter();

  const navigateToHome = () => {
    router.push('/');
  }

  const questions = [
    {
      id: 1,
      question: "What is your favorite color?",
      options: ["Red", "Blue", "Green", "Yellow"],
    },
    {
      id: 2,
      question: "Which programming language do you prefer?",
      options: ["JavaScript", "Python", "Java", "C++"],
    },
    {
      id: 3,
      question: "What is your favorite animal?",
      options: ["Dog", "Cat", "Bird", "Fish"],
    },
    {
      id: 4,
      question: "What is your preferred mobile operating system?",
      options: ["Android", "iOS", "Other"],
    },
    {
      id: 5,
      question: "What is your favorite food?",
      options: ["Pizza", "Burger", "Pasta", "Sushi"],
    },
    {
      id: 6,
      question: "Choose a superhero:",
      options: ["Spider-Man", "Batman", "Superman", "Wonder Woman"],
    },
    {
      id: 7,
      question: "What's your favorite season?",
      options: ["Spring", "Summer", "Autumn", "Winter"],
    },
    {
      id: 8,
      question: "Do you prefer tea or coffee?",
      options: ["Tea", "Coffee", "Neither"],
    },
    {
      id: 9,
      question: "What's your preferred social media platform?",
      options: ["Facebook", "Instagram", "Twitter", "LinkedIn"],
    },
    {
      id: 10,
      question: "Which type of music do you like the most?",
      options: ["Rock", "Pop", "Hip-Hop", "Classical"],
    },
  ];
  

  const handleOptionChange = (questionId, selectedOption) => {
    setAnswers({ ...answers, [questionId]: selectedOption });
  };

  const submitSurvey = () => {
    // Here, you can do something with the survey responses, like sending them to a server.
    console.log("Survey Responses:", answers);
    setCompleted(true);
  };

  return (
    <div>
      {completed ? (
        <div className="p-6 space-y-4 flex justify-center">
          <div className="mt-20">
            <h1 className="text-3xl font-bold">Survey Responses:</h1>
            <ul className="mt-5 ml-10 list-none pl-6">
              {Object.entries(answers).map(([questionId, selectedOption]) => (
                <li key={questionId}>
                  Question {questionId}: {selectedOption}
                </li>
              ))}
            </ul>
            <button
              onClick={navigateToHome}
              className="mt-5 ml-20 bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
            >
              Go to Home
            </button>
          </div>
        </div>
      ) : (
        <div className="p-6 space-y-4">
          <h1 className="text-3xl font-bold">Survey</h1>
          {questions.map((question) => (
            <div
              key={question.id}
              className="bg-white rounded-lg shadow-md p-4"
            >
              <p className="text-lg font-medium">{question.question}</p>
              <div className="mt-2 space-y-2">
                {question.options.map((option) => (
                  <label key={option} className="flex items-center">
                    <input
                      type="radio"
                      name={`question${question.id}`}
                      value={option}
                      checked={answers[question.id] === option}
                      onChange={() => handleOptionChange(question.id, option)}
                      className="form-radio h-5 w-5 text-blue-600"
                    />
                    <span className="ml-2">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
          <button
            onClick={submitSurvey}
            className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
          >
            Submit Survey
          </button>
        </div>
      )}
    </div>
  );
};

export default Survey;
