import React from "react";
import "/home/bhararathram/e-ulavan/frontend/src/components/Home.css"
import { useState, useEffect } from "react";

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
  Row,ThemeProvider,Popover,Overlay
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
  const[productMrpPerKg,setProductMrpPerKg] =useState("");
  const [productDetails, setproductDetails] = useState("");
  const [image, setImage] = useState(null);

  const [posts, setposts] = useState("");

  const [postData, setPostData] = useState([]);

  const [test,setTest]=useState(false)

  const [show3, setShow3] = useState(false);
  const [target, setTarget] = useState(null);

  const [show4, setShow4] = useState(false);
  const [target1, setTarget1] = useState(null);


  const onImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
    console.log(image);
  };

  const postProduct = () => {
    if (
      productName !== "" &&
      productQuantity !== "" &&
      productDetails !== "" &&
      image !== "" &&
      productMrpPerKg !== ""
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
      
     setShow(false)
     setImage(null)
     setTest(true)
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

 
  const addToCart =(index)=>{
    console.log(postData[index])

  }
 

  const handleClickOrder = (event) => {
    setShow3(!show3);
    setTarget(event.target);
  };


  const handleClickMyCart = (event) => {
    setShow4(!show4);
    setTarget1(event.target);
  };


  return (
    <>
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><i class="fa-brands fa-pagelines"></i><b><i>E-ULAVAN</i></b></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end" >
          
          <Button style={{marginRight:"90px"}}   onClick={handleShow}><i class="fa-solid fa-paper-plane"></i> POST</Button >
          <Button onClick={handleClickMyCart} >My Cart <i class="fa-solid fa-bag-shopping"></i></Button>
        </Navbar.Collapse>

      </Container>
    </Navbar>

{/* my cart overlay */}
    <Overlay
        show={show4}
        target={target1}
        placement="bottom"
        
        containerPadding={50}
      >
        <Popover id="popover-contained">
          <Popover.Header as="h3">My Cart</Popover.Header>
          <Popover.Body>
            
        
          </Popover.Body>
        </Popover>
      </Overlay>
           

      {postData.length > 0 &&
        postData.map((data,index) => {
          return (
            <Card className="cards" style={{ width: "18rem", float: "left", margin: "10px" }}>
               <Card.Img variant="top" src={data.image} size="sm" />
              <Card.Title><b style={{color:"green"}}>Product Name:</b>{data.productname}</Card.Title>
             
              <Card.Body>
                
                <Card.Text>
                 <b style={{color:"green"}}>details:</b> 
                {data.productdetails}
                
                </Card.Text>
                <Card.Text><b style={{color:"green"}}> Available:</b>           
                {data.productquantity} -kg.
                
                </Card.Text>
                <Card.Text >
                  RS PER KG 
                </Card.Text>

                <Card.Text >
                <i class="fa-solid fa-truck-fast"></i> expected delevery within 2days
                </Card.Text>

                <Button variant="success"  onClick={()=>{addToCart(index)}} size="sm" ><i class="fa-solid fa-cart-shopping"></i> ADD TO CART</Button>
                <Button variant="white" onClick={handleClickOrder} style={{borderColor:"black",marginLeft:"40px"}} size="sm" className="justify-content-end"> <i class="fa-solid fa-handshake"></i> ORDER</Button>
              </Card.Body>
              <Overlay
        show={show3}
        target={target}
        placement="top"
        
        containerPadding={50}
      >
        <Popover id="popover-contained">
          <Popover.Header as="h3">Confirm Order</Popover.Header>
          <Popover.Body>
            
          <Form.Control placeholder="" type="number"/>KG
          <Button size="sm" style={{marginLeft:"160px"}}>ORDER</Button>
          </Popover.Body>
        </Popover>
      </Overlay>
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
              Name
              <Form.Control
                placeholder="Enter Your Name"
                style={{ maxWidth: "300px" }}
                onChange={(e) => setProductName(e.target.value)}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              Product Quantity
              <Form.Control
                placeholder="Quantity in Numbers"
                type="number"
                style={{ maxWidth: "300px" }}
                onChange={(e) => setProductQuantity(e.target.value)}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
             Mrp per 1/kg
              <Form.Control
                placeholder="Mrp per 1/kg"
                type="number"
                style={{ maxWidth: "300px" }}
                onChange={(e) => setProductMrpPerKg(e.target.value)}
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
