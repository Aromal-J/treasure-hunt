import React, { useState } from "react";
import Modal from "../modals/SuccessModal";

const TreasureHuntWon = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClaimReward = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 via-teal-400 to-green-700 flex flex-col items-center justify-center text-white">
      {/* Header */}
      <h1 className="text-6xl font-bold text-center animate-bounce">
        🎉 Congratulations! 🎉
      </h1>

      {/* Subheading */}
      <p className="text-xl mt-4 text-center max-w-lg">
        You’ve successfully completed the Treasure Hunt and discovered the
        hidden treasure! Your skills, determination, and wits have led you to
        victory.
      </p>

      {/* Call to Action */}
      <div className="mt-8">
        <button
          onClick={handleClaimReward}
          className="bg-yellow-400 text-purple-900 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-300 hover:shadow-2xl transition-all duration-300"
        >
          Claim Your Reward
        </button>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-sm text-gray-200">
        Thank you for participating in the Treasure Hunt. Stay tuned for more
        adventures!
      </footer>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <p className="text-center text-lg">പോയി ആയിശയോട് ചോദിക്കു 🏆</p>
      </Modal>
    </div>
  );
};

export default TreasureHuntWon;
