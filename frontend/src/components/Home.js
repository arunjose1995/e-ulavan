import React from "react";

import { useState, useEffect } from "react";
import HomeCard from "./HomeCard";
import axios from "axios";
import {
  Modal,
  Button,
  Form,
  Image,
  Card,
  Nav,
  Navbar,
  Container,
  Col,
  Row,ThemeProvider
} from "react-bootstrap";
import { json } from "react-router-dom";

const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {setShow(false)
  setImage(null)};
  const handleShow = () => setShow(true);

  const [alert, setAlert] = useState(false);

  // post product details//
  const [productName, setProductName] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productDetails, setproductDetails] = useState("");
  const [image, setImage] = useState(null);

  const [posts, setposts] = useState("");

  const [postData, setPostData] = useState([]);

  const [test,setTest]=useState(false)

  const onImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
    console.log(image);
  };

  const postProduct = () => {
    if (
      productName !== "" &&
      productQuantity !== "" &&
      productDetails !== "" &&
      image !== ""
    ) {
      const postp = {
        productname: productName,
        productquantity: productQuantity,
        productdetails: productDetails,
        image: image,
      };
      const url = "http://localhost:5000/product/postdetails/post";

      axios.post(url, postp).then((res) => {
        console.log(res);
      });

      setposts(postp);
      console.log(posts);
      setTest(true)
     setShow(false)
    } else {
      setAlert(true);
    }

  };

  useEffect(() => {
    const url = "http://localhost:5000/product/api/details";

    axios
      .get(url)
      .then((res) => {
        console.log(res.data[1].image);

        setPostData(res.data);

        console.log(postData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [test]);

  return (
    <>
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">E-ULAVAN</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end" >
          <Button style={{marginRight:"90px"}}   onClick={handleShow}><i class="fa-solid fa-camera"></i>  POST</Button >
        </Navbar.Collapse>
      </Container>
    </Navbar>

      {postData.length > 0 &&
        postData.map((data) => {
          return (
            <Card style={{ width: "18rem", float: "left", margin: "10px" }}>
              <Card.Title><span>Product Name :</span>{data.productname}</Card.Title>
              <Card.Img variant="top" src={data.image} size="md" />
              <Card.Body>
                
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary"  size="sm" ><i class="fa-solid fa-cart-shopping"></i> ADD TO CART</Button>
                <Button variant="primary"  size="sm" className="justify-content-end">ORDER</Button>
              </Card.Body>
            </Card>
          );
        })}

      {/* this is for post products */}

      <Modal
        show={show}
        onHide={handleClose}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        style={{ marginTop: "20px" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>POST PRODUCTS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
             {image !== null && <Image
                src={image}
                style={{ maxWidth: "300px",minWidth:"10px" }}
               
              />} 
              <Form.Control
                type="file"
                accept="image/jpg,image/jpeg,image/img,image/png"
                onChange={onImageChange}
                size="sm"
                style={{ maxWidth: "300px" }}
                className="filetype"
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              name
              <Form.Control
                placeholder="Enter Your Name...."
                style={{ maxWidth: "300px" }}
                onChange={(e) => setProductName(e.target.value)}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              product Quantity
              <Form.Control
                placeholder="Quantity in Numbers...."
                type="number"
                style={{ maxWidth: "300px" }}
                onChange={(e) => setProductQuantity(e.target.value)}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              Product Details
              <Form.Control
                placeholder="Enter Your product details...."
                as="textarea"
                style={{ maxWidth: "300px" }}
                onChange={(e) => setproductDetails(e.target.value)}
              />
            </Form.Group>
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
          <Button variant="primary" onClick={postProduct}>
            POST
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Home;
