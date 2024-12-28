import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const SignUp = () => {
  const { updateUser } = useContext(AuthContext);
  const navigate = useNavigate(); // React Router's navigate function
  const [teamName, setTeamName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showLoginButton, setShowLoginButton] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    setMessage("");
    setShowLoginButton(false);

    const payload = {
      team_name: teamName,
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        "https://ipme6pm9jh.ap-south-1.awsapprunner.com/api/v1/users/signup/",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        setMessage("🎉 Signup successful! Welcome to the Hunt!");
        updateUser(response.data);
        console.log(response.data);

        const { team_name, team_unique_id } = response.data.data;
        navigate(`/${team_name}/level-1/${team_unique_id}`);
      } else {
        setMessage(
          response.data.detail || "❌ Signup failed. Please try again."
        );
      }
    } catch (error) {
      if (error.response && error.response.data.status_code === 6001) {
        setMessage("❌ User already exists. Please log in.");
        setShowLoginButton(true); // Show the login button
      } else {
        setMessage("❌ An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full h-[100vh] flex justify-center items-center gap-5">
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          Hunt Starts Now...
        </h1>

        <div className="flex flex-col gap-3">
          <form
            onSubmit={(e) => {
              e.preventDefault(); // Prevent the default form submission
              handleClick(); // Call the handleClick function
            }}
            className="flex flex-col gap-3"
          >
            <input
              type="text"
              className="bg-gray-200 focus:bg-gray-100 placeholder-gray-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#059664] w-[100%]"
              placeholder="Enter your team name"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              autoComplete="organization"
            />
            <input
              type="email"
              className="bg-gray-200 focus:bg-gray-100 placeholder-gray-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#059664] w-[100%]"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
            <input
              type="password"
              className="bg-gray-200 focus:bg-gray-100 placeholder-gray-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#059664] w-[100%]"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <button
              type="submit"
              className="bg-[#059664] text-white font-semibold rounded-md px-12 py-2 shadow-md hover:shadow-lg transition-all"
              disabled={loading}
            >
              {loading ? "Signing up..." : "Enter"}
            </button>
          </form>
        </div>
        {message && (
          <p
            className={`text-center mt-4 ${
              message.startsWith("🎉") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
        {showLoginButton && (
          <button
            onClick={() => navigate("/login")} // Redirect to login page
            className="bg-blue-600 text-white font-semibold rounded-md px-12 py-2 shadow-md hover:shadow-lg transition-all mt-3"
          >
            Log In
          </button>
        )}
      </div>
    </div>
  );
};

export default SignUp;
