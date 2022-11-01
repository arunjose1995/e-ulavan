import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registration from "./components/Registration";
import HomeCard from "./components/HomeCard";
import Home from "./components/Home";
import BuyerHome from "./components/buyerHome";

const Routering = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}

          <Route exact path="/" element={<Registration />} />
          <Route path="/home" element={<Home />} />
          <Route path="/homeCard" element={<HomeCard/>} />
          <Route path="/buyerHome" element={<BuyerHome/>} />
        </Routes>
      </Router>
    </div>
  );
};
export default Routering;