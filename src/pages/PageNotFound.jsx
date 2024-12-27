import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-500 to-pink-500 text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Page Not Found</p>
      <Link to="/login" className="text-blue-300 hover:underline">
        Go Back to Login
      </Link>
    </div>
  );
};

export default PageNotFound;
