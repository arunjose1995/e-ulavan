import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Login from "./Login";
import Row from "react-bootstrap/Row";
import { NavLink } from "react-router-dom";

const NewRegistrationForm = () => {
  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: "#284461" }}>
        <Container style={{ justifyContent: "flex-start" }}>
          <Navbar.Brand>
            <h2>E-ULAVAN</h2>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container style={{ marginTop: "70px" }}>
        <Row style={{ justifyContent: "center", alignItem: "center" }}>
          <Card style={{ width: "600px" }}>
            <Card.Body>
              <div>
                <p style={{fontSize:'30px'}}>
                who ploughing eat their food,they truely live:<span style={{fontSize:'20px'}}>the rest to others
                bend subservient,eating that they give...</span>
                </p>
                <div style={{display:'flex',justifyContent:'center'}}>
                  <NavLink to={"/Login"} style={{fontSize:'20px',textDecoration:'none'}}>Get Started ....</NavLink>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
};

export default NewRegistrationForm;