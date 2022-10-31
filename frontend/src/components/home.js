import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { TextField } from "@mui/material";

function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [bio, setBio] = useState("");

//  for  all fields 
const [alert,setAlert] =useState(false);


const alerterror =()=>{
    if (name !== ""  && address !=="" && mobileNumber !=="" && bio!=="" ) {
       
        const former = {
            name: name,
            address: address,
            mobileNumber: mobileNumber,
            bio: bio,
          };
          console.log(former)
          setAlert(false)
        
    } else {
        setAlert(true) 
    }
}

 

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
     manufacturer details
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>ENTER YOUR DETAILS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <h6 style={{ displayFlex: "inline-flex" }}>
              name :
              <Form.Control
                onChange={(e) => setName(e.target.value)}
                placeholder="enter your name...."
              ></Form.Control>
            </h6>

            <h6>
              ADDRESS :{" "}
              <Form.Control
                onChange={(e) => setAddress(e.target.value)}
                style={{ padding: "30px" }}
                placeholder="enter your address here...."
              ></Form.Control>{" "}
            </h6>

            <h6>
              MOBILE NUMBER :
              <Form.Control
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder="9876543210"
              ></Form.Control>{" "}
            </h6>

            <h6>
              BIO :{" "}
              <Form.Control
                onChange={(e) => setBio(e.target.value)}
                style={{ padding: "30px" }}
                placeholder="enter your bio here...."
              ></Form.Control>{" "}
            </h6>
          </Form>
          {alert === true && <p style={{color:"red"}}>*****    please fill all the fields   *****</p>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant="primary" onClick={alerterror}>
            CONFIRM
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Home;
