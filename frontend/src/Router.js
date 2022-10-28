import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registration from "./components/Registration";

const Routering = () => {
  return (
    <div >
    <Router>
      <Routes>
        <Route exact path="/" element={<Registration />} />
        
      </Routes>
    </Router>
    </div>
  );
};
export default Routering;
