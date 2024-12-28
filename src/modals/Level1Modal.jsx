import React from "react";

const Level1Modal = ({ message }) => {
  return (
    <div className="z-50 fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
      <div className="bg-white text-gray-800 rounded-lg p-8 shadow-lg max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">🎉 Congratulations!</h2>
        <p className="text-lg mb-4">{message}</p>
      </div>
    </div>
  );
};

export default Level1Modal;
