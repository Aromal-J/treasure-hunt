import React from "react";

const SuccessModal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white text-black rounded-lg shadow-lg p-6 w-96">
          <h2 className="text-2xl font-bold mb-4 text-center">🎁 Reward</h2>
          <div className="mb-6">{children}</div>
          <button
            onClick={onClose}
            className="bg-red-500 text-white py-2 px-6 rounded-full font-bold hover:bg-red-600 transition-all w-full"
          >
            Close
          </button>
        </div>
      </div>
    );
  };
  
export default SuccessModal;
