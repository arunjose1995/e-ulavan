import React, { useEffect, useState } from 'react'
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

export const BuyerHome = () => {
  const [postData, setPostData] = useState([]);

  const [test,setTest]=useState(false)

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
  
  return (<>
    <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Brand href="#home">E-ULAVAN</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end" >
        {/* <Button style={{marginRight:"90px"}}   onClick={handleShow}><i class="fa-solid fa-camera"></i>  POST</Button > */}
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
      </>

  )
}
 export default BuyerHome ;