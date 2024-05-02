import React from "react";
import Home from "./pages/Home";
import Jobcards from "./pages/Jobcards";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HowItWorks from "./pages/HowItWorks";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import GetStarted from "./pages/GetStarted";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/jobcards" element={<Jobcards />}></Route>
          <Route path="/HowItWorks" element={<HowItWorks />}></Route>
          <Route path="/Pricing" element={<Pricing />}></Route>
          <Route path="/Blog" element={<Blog />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/GetStarted" element={<GetStarted />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
