import React, { useState } from "react";
import { Grid, Button } from "@mui/material";
import { Card, CardContent, CardActionArea, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { Modal, Form } from "react-bootstrap";

import axios from "axios";
import Home from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";

const HomeCard = () => {
  const navigateTo = useNavigate();
  //----------this is for manufacturer details--------------//
  const [showCard, setShowCard] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mobilenumber, setMobilenumber] = useState("");
  const [bio, setBio] = useState("");
  //  for  all fields
  const [alert, setAlert] = useState(false);
  // ============this is for buyer details==================//

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [buyername, setBuyerName] = useState("");
  const [buyeraddress, setBuyerAddress] = useState("");
  const [buyermobileNumber, setBuyerMobileNumber] = useState("");
  const [buyerbio, setBuyerbio] = useState("");


  const [buyeralert, setBuyerAlert] = useState(false);


  //========this alerterror for fill all the fields=========//
  const alerterror = () => {
    if (name !== "" && address !== "" && mobilenumber !== "" && bio !== "") {
      const former = {
        name: name,
        address: address,
         mobilenumber: mobilenumber,
        bio: bio,
      };
      // ==========this is for  api============//
      const url = "http://localhost:5000/manufacture/post";

      axios.post(url, former).then((res) => {
        console.log(res);
      });

      console.log(former);
      setAlert(false);
      setShowCard(true);                                                                              
      setShow(false);
     navigateTo('/home')

    } else {
      setAlert(true);
    }
  };

const buyerdetails =()=>{
  if(buyername !== "" && buyeraddress !=="" && buyermobileNumber !=="" && buyerbio !==""){

  
  const buyer={
    name :buyername,
    address:buyeraddress,
    mobileNumber:buyermobileNumber,
    bio:buyerbio,
  }
  const url = "http://localhost:5000/buyer/post";

  axios.post(url, buyer).then((res) => {
    console.log(res);
  });

  console.log(buyer)
  navigateTo("/buyerHome")
}else{
  setBuyerAlert(true)

}
}


  return (
    <>
      {/* this card for coose role */}
      {showCard === false && (
        <Grid
          container
          style={{
            marginTop: "100px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item md={6}>
            <Card style={{ backgroundColor: "#1DD455" }}>
              <CardActionArea>
                <CardContent>
                  <Typography
                    variant="h5"
                    component={"h5"}
                    style={{ textAlign: "center", color: "#FFFFFF" }}
                  >
                    CHOOSE YOUR ROLE
                  </Typography>
                  <Button
                    onClick={handleShow}
                    variant="contained"
                    color="secondary"
                    startIcon={<AccountCircleIcon />}
                    sx={{
                      display: "inline-block",
                      width: "70%",
                      marginLeft: "80px",
                      marginTop: "40px",
                    }}
                  >
                    MANUFACTURER
                  </Button>
                  <Button
                  onClick={handleShow1}
                    variant="contained"
                    color="secondary"
                    startIcon={<AccountCircleIcon />}
                    sx={{
                      display: "inline-block",
                      width: "70%",
                      marginLeft: "80px",
                      marginTop: "40px",
                      marginBottom: "40px",
                    }}
                  >
                    BUYER
                  </Button>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      )}
      {/* this is manufacturer details */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered       
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
                onChange={(e) => setMobilenumber(e.target.value)}
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
          {alert === true && (
            <p style={{ color: "red" }}>
              ***** please fill all the fields *****
            </p>
          )}
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

  
{/*==========\\ this is for  buyer details modals //======== */}
      
      <Modal
        show={show1}
        onHide={handleClose1}
        backdrop="static"
        keyboard={false}
       
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
        <Modal.Header closeButton>
          <Modal.Title>buyer details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form>
         <h6 style={{ displayFlex: "inline-flex" }}>
              name :
              <Form.Control
                onChange={(e) => setBuyerName(e.target.value)}
                placeholder="enter your name...."
              ></Form.Control>
            </h6>

            <h6>
              ADDRESS :{" "}
              <Form.Control
                onChange={(e) => setBuyerAddress(e.target.value)}
                style={{ padding: "30px" }}
                placeholder="enter your address here...."
              ></Form.Control>{" "}
            </h6>

            <h6>
              MOBILE NUMBER :
              <Form.Control
                onChange={(e) => setBuyerMobileNumber(e.target.value)}
                placeholder="9876543210"
              ></Form.Control>{" "}
            </h6>

            <h6>
              BIO :{" "}
              <Form.Control
                onChange={(e) => setBuyerbio(e.target.value)}
                style={{ padding: "30px" }}
                placeholder="enter your bio here...."
              ></Form.Control>{" "}
            </h6>
         
          {buyeralert === true && (
            <p style={{ color: "red" }}>
              ***** please fill all the fields *****
            </p>
          )}

         </Form>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
          <Button variant="primary" onClick={buyerdetails}>confirm</Button>
        </Modal.Footer>
      </Modal>

    </>
  );
};

export default HomeCard;
