import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomeCard from "./components/HomeCard";
import Home from "./components/Home";
import BuyerHome from "./components/buyerHome";
import NewRegistrationForm from "./components/NewRegistrationForm";
import Login from "./components/Login";
import Registration1 from "./components/Registration1";

const Routering = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}

          <Route exact path="/" element={<NewRegistrationForm />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Registration1" element={<Registration1 />}/>
          <Route path="/Home" element={<Home />} />
          <Route path="/HomeCard" element={<HomeCard/>} />
          <Route path="/buyerHome" element={<BuyerHome/>} />
        </Routes>
      </Router>
    </div>
  );
};
export default Routering;
