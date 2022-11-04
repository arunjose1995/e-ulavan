import React, { useEffect, useState } from "react";
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
  Row,
  ThemeProvider,Popover,Overlay
} from "react-bootstrap";

export const BuyerHome = () => {
  const [postData, setPostData] = useState([]);

  const [test, setTest] = useState(false);

  const [show4, setShow4] = useState(false);
  const [target1, setTarget1] = useState(null);


  const [show3, setShow3] = useState(false);
  const [target, setTarget] = useState(null);
  
  const handleClickMyCart = (event) => {
    setShow4(!show4);
    setTarget1(event.target);
  };

  const addToCart =(index)=>{
    console.log(postData[index])

  }
 

  const handleClickOrder = (event) => {
    setShow3(!show3);
    setTarget(event.target);
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
          <Navbar.Collapse className="justify-content-end">
            <Button onClick={handleClickMyCart}>
              My Cart <i class="fa-solid fa-bag-shopping"></i>
            </Button>
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
          <Popover.Body></Popover.Body>
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
    </>
  );
};
export default BuyerHome;
