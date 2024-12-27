import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Level2 = () => {
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const {id, "team-name":teamName} = useParams()

  console.log(`/${id}/level-three/${teamName}`);
  


  const binaryString =
    "01001111 01110000 01100101 01101110 01010011 01010011 01001100";

  document.cookie = `myBinaryCookie=${binaryString}; path=/; expires=Fri, 31 Dec 2024 23:59:59 GMT`;


  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.trim() === "") {
      setFeedback("Please provide an answer!");
      setIsCorrect(false);
    } else {
      const correct = answer.trim().toLowerCase() === "correctanswer";
      setIsCorrect(correct);
      if (correct) {
        setShowModal(true);
      } else {
        setFeedback("❌ Try again!");
      }
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 via-teal-500 to-green-500 text-white">
      {/* Header */}
      <div
        className="fixed inset-0 bg-opacity-20 flex justify-center items-center flex-col z-10 min-h-screen"
        style={{
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.3)", // Semi-transparent background to enhance blur effect
        }}
      >
        <h1 className="text-5xl font-bold mb-6 text-center">
          🧠 Level 2: The Challenge Begins!
        </h1>

        {/* Question Card */}
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 w-full max-w-3xl">
          <p className="text-lg">
            It is typically used for remembering stateful information about the
            user, such as login status, preferences, or tracking information
            across sessions.{" "}
          </p>

          {/* Answer Form */}
          <form onSubmit={handleSubmit} className="flex flex-col mt-6 gap-4">
            <div className="flex flex-col gap-1">
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Type your answer here"
                className={`w-full px-4 py-3 rounded-md border-2 focus:outline-none focus:ring-2 ${
                  isCorrect === null
                    ? "border-gray-300 focus:ring-blue-500"
                    : isCorrect
                    ? "border-green-500 focus:ring-green-500"
                    : "border-red-500 focus:ring-red-500"
                }`}
              />
              {feedback && (
                <p
                  className={`text-sm font-medium ${
                    isCorrect ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {feedback}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-md transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div></div>
      {showModal && (
        <Level1Modal message="Check the Output" />
      )}
    </div>
  );
};

export default Level2;
