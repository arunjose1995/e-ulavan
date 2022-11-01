import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registration from "./components/Registration";

import HomeCard from "./components/HomeCard";
import Home from './components/Home'
import Login from "./components/Login";

const Routering = () => {
  return (
    <div >
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        {/* <Route path="/home" element={<Home/>} /> */}
      </Routes>
    </Router>
    </div>
  );
};
export default Routering;
