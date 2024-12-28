import React, { useContext, useEffect, useState } from "react";
import Level1Modal from "../modals/Level1Modal";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const Level3 = () => {
  const { userData } = useContext(AuthContext);

  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingCorrectAns, setLoadingCorrectAns] = useState(false);
  const [questionData, setQuestionData] = useState(null);
  const [correctAns, setCorrectAns] = useState(null);

  const fetchQuestion = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        "https://ipme6pm9jh.ap-south-1.awsapprunner.com/api/v1/hunts/user-question/",
        {
          headers: {
            Authorization: `Bearer ${userData.data.tokens.access}`,
          },
        }
      );

      const {
        data: { description, attachment, is_last_question, order, title },
      } = response.data;

      setQuestionData({
        description,
        attachment,
        is_last_question,
        order,
        title,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const checkAnswer = async (e) => {
    e.preventDefault();
    setLoadingCorrectAns(true);

    try {
      const payload = { answer };
      console.log(payload);

      const response = await axios.post(
        "https://ipme6pm9jh.ap-south-1.awsapprunner.com/api/v1/hunts/validate-user-question/",
        payload,
        {
          headers: {
            Authorization: `Bearer ${userData.data.tokens.access}`,
          },
        }
      );

      console.log(response);

      if (response.data.status_code === 6000) {
        setIsCorrect(true);
        setShowModal(true);
        setFeedback("Correct answer!");
      } else {
        setIsCorrect(false);
        setFeedback("❌ Incorrect answer. Try again!");
      }
    } catch (error) {
      console.error("Error submitting answer:", error);
      setFeedback("❌ Something went wrong. Please try again later.");
    } finally {
      setLoadingCorrectAns(false);
    }
  };

  useEffect(() => {
    fetchQuestion();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 via-teal-500 to-green-500 flex flex-col justify-center items-center text-white px-4">
      {/* Header */}
      <h1 className="text-5xl font-bold mb-6 text-center">
        {loading
          ? "Loading..."
          : `   🧠 Level ${questionData?.order}: ${questionData?.title}`}
      </h1>

      {/* Question Card */}
      <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 w-full max-w-3xl">
        <p className="text-lg">
          {loading ? "Loading..." : `${questionData?.description}`}
        </p>

        <div className="mb-6">
          <img
            src={attachment}
            alt="Steganography"
            className="max-w-full h-auto rounded-md shadow-lg"
          />
        </div>

        {/* Answer Form */}
        <form onSubmit={checkAnswer} className="flex flex-col mt-6 gap-4">
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
      {showModal && (
        <Level1Modal message="You now have:- U2FsdGVkX1+JFWh+EZu+sSeZrRjhJzG2Ve5wPZ2r+IGNtZWb8Pc4GjBVCyYSeOEf openSSL and Hackathon@5.0 " />
      )}
    </div>
  );
};

export default Level3;
