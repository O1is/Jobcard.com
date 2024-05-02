import React, { useState, useEffect } from "react";
import usericon from "../assets/usericon.png";
import locationicon from "../assets/location.png";
import axios from "axios";
import Modal from "@/components/Modal";

const JobcardLayout = () => {
  const [professionals, setProfessionals] = useState([]);
  const [selectedProfessional, setSelectedProfessional] = useState(null);

  useEffect(() => {
    const fetchProfessionals = async () => {
      try {
        const response = await axios.get("http://localhost:3000/professionals");
        setProfessionals(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchProfessionals();
  }, []);

  const openModalForProfessional = (professional) => {
    setSelectedProfessional(professional);
  };

  const closeModal = () => {
    setSelectedProfessional(null);
  };

  return (
    <>
      <div className="grid grid-cols-5 grid-row-5 gap-4 place-items-center mr-[335px] ml-[335px]">
        {professionals.map((professional) => (
          <button
            key={professional.id} // Assuming each professional has a unique id
            className="OpenModalButton"
            onClick={() => openModalForProfessional(professional)}
          >
            <div className="w-[230px] h-[325px] rounded border-2 border-gray-100 hover:border-gray-200 shadow-md">
              <img src="" className="bg-white w-auto h-[200px]" />
              <div className="bg-white w-auto h-[120px] p-1 ">
                <h1 className="text-black font-semibold pl-2 pt-2 text-left">
                  {professional.name} ({professional.age})
                </h1>

                <div className="flex flex-col pl-2 text-sm text-black pt-1">
                  <span className="flex items-center">
                    <img src={usericon} alt="i" className="pr-1 w-5 h-4" />
                    <span>{professional.job}</span>
                  </span>
                  <span className="flex items-center">
                    <img src={locationicon} alt="i" className="pr-1 w-5 h-4" />
                    <span>{professional.location}</span>
                  </span>
                </div>

                <div className="flex flex-row pt-1">
                  <div className=" text-black ml-2 rounded text-xs pl-1 pr-1 mt-1 font-mono">
                    {professional.yearsExperience}
                  </div>
                  <div className=" text-black ml-2 rounded text-xs pl-1 pr-1 mt-1 font-mono">
                    {professional.status}
                  </div>
                  <div
                    className={`text-black ml-2 rounded text-xs pl-1 pr-1 mt-1 font-mono ${
                      parseInt(professional.offers.split(" ")[1]) > 6
                        ? "bg-red-300"
                        : parseInt(professional.offers.split(" ")[1]) > 3
                        ? "bg-yellow-200"
                        : "bg-green-300"
                    }`}
                  >
                    {professional.offers}
                  </div>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
      {selectedProfessional && (
        <Modal closeModal={closeModal} professional={selectedProfessional} />
      )}
    </>
  );
};

export default JobcardLayout;
