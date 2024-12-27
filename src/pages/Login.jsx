// import React, { useState } from "react";

// const Login = () => {
//     const [isHovered, setIsHovered] = useState(false);

//     const handleMouseEnter = () => {
//       setIsHovered(true);
//     };

//     const handleMouseLeave = () => {
//       setIsHovered(false);
//     };
//   return (
//     <>
//       <div className="flex justify-center items-center h-[100vh] gap-3">
//         <input
//           type="text"
//           className="bg-gray-200 focus:bg-gray-100 placeholder-gray-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64"
//           placeholder="Competitive name..."
//         />
//         <button
//         className={`bg-indigo-600 text-white font-medium rounded-md px-6 py-2 shadow-md transition-all ${
//           isHovered ? "translate-x-20" : ""
//         }`}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         Click Me
//       </button>
//       </div>
//     </>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Login = () => {
  const [buttonPosition, setButtonPosition] = useState({
    top: "62%",
    left: "46%",
  });

  const id = useParams();
  console.log(id);
  

  const moveButton = () => {
    const randomTop = Math.random() * 80 + 10; // Random value between 10% and 90%
    const randomLeft = Math.random() * 80 + 10; // Random value between 10% and 90%
    setButtonPosition({
      top: `${randomTop}%`,
      left: `${randomLeft}%`,
    });
  };

  const handleClick = () => {
    console.log("Clicked!");
  };

  return (
    <div className="relative w-full h-[100vh] flex justify-center items-center gap-5">
      <div className="flex flex-col gap-5">
        {/* <h1 className="text-4xl font-bold text-green-600">
          Hunt Starts Now.....
        </h1> */}
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          Hunt Starts Now...
        </h1>

        <div className="flex flex-col gap-3">
          <input
            type="email"
            className="bg-gray-200 focus:bg-gray-100 placeholder-gray-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#059664] w-[100%]"
            placeholder="Enter your email"
          />
          <input
            type="password"
            className="bg-gray-200 focus:bg-gray-100 placeholder-gray-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#059664] w-[100%]"
            placeholder="Password"
          />
          <button
            onClick={handleClick}
            style={{
              position: "absolute",
              top: buttonPosition.top,
              left: buttonPosition.left,
            }}
            className="bg-[#059664] text-white font-semibold rounded-md px-12 py-2 shadow-md hover:shadow-lg transition-all"
            onMouseEnter={moveButton}
          >
            Enter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
