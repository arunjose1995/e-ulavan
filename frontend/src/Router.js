import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registration from "./components/Registration";
import Home from "./components/home";
const Routering = () => {
  return (
    <div >
    <Router>
      <Routes>
        <Route exact path="/" element={<Registration />} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </Router>
    </div>
  );
};
export default Routering;
