import React from "react";

function Modal({ closeModal, professional }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg w-[340px] p-6">
        <div className="flex justify-end">
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-700"
          >
            X
          </button>
        </div>
        <div className="title">
          <h1 className="font-bold">{professional.name}</h1>
        </div>
        <div className="body">
          <p>Job: {professional.job}</p>
          <p>Age: {professional.age}</p>
          <p>Experience: {professional.yearsExperience}</p>
          <p>Status: {professional.status}</p>
          <p>Offers: {professional.offers}</p>
        </div>
        <div className="footer">
          <div className="flex justify-between mt-6">
            <button className="p-4 bg-gray-400">How it Works</button>
            <button className="p-4 bg-green-400">Unlock Lead</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
