import React from "react";

const Level1Modal = ({ message }) => {
  const lines = message.split("\n");
  return (
    <div className="z-50 fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
      <div className="bg-white text-gray-800 rounded-lg p-8 shadow-lg max-w-md max-h-[80vh] overflow-y-auto text-center">
        <h2 className="text-2xl font-bold mb-4 break-words overflow-hidden text-ellipsis whitespace-normal">
          🎉 Congratulations!
        </h2>
        {lines.map((line, index) => (
          <p key={index} className="text-lg mb-2 break-words">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Level1Modal;
