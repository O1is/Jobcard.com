import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import JobcardLayout from "../components/JobcardLayout";
import axios from "axios";

export default function Jobcards() {
  const [cards, setCards] = useState([]);

  const testCards = [
    {
      Name: "James Klein",
      Age: 20,
      Ausbildung: "Großhandelskaufmann",
      Standort: "Regensburg",
      Erfahrung: "5 Jahre",
      Suchend: true,
      Angebote: `Angebote 2`,
    },
    {
      Name: "Leo Banks",
      Age: 18,
      Ausbildung: "Einzelhandelskaufmann",
      Standort: "Regensburg",
      Erfahrung: "3 Jahre",
      Suchend: true,
      Angebote: `Angebote 0`,
    },
    ,
    {
      Name: "Sarah Schlank",
      Age: 24,
      Ausbildung: "Steuerfachangestellte",
      Standort: "Straubing",
      Erfahrung: "6 Jahre",
      Suchend: true,
      Angebote: `Angebote 4`,
    },
    {
      Name: "Max Hill",
      Age: 32,
      Ausbildung: "KFZ-Mechatroniker",
      Standort: "Nürnberg",
      Erfahrung: "14 Jahre",
      Suchend: true,
      Angebote: `Angebote 7`,
    },
    {
      Name: "Max Hill",
      Age: 27,
      Ausbildung: "KFZ-Mechatroniker",
      Standort: "Nürnberg",
      Erfahrung: "14 Jahre",
      Suchend: true,
      Angebote: `Angebote 7`,
    },
  ];

  useEffect(() => {
    setCards(testCards);
  }, []);

  return (
    <>
      <Navbar />
      <hr className=" mb-8 " />
      <JobcardLayout cards={cards} />
    </>
  );
}
