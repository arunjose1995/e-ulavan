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
  ThemeProvider,Popover,Overlay,Dropdown,DropdownButton
} from "react-bootstrap";

export const BuyerHome = () => {
  const [postData, setPostData] = useState([]);

  const [test, setTest] = useState();

  const [show4, setShow4] = useState(false);
  const [target1, setTarget1] = useState(null);


  const [show3, setShow3] = useState(false);
  const [target, setTarget] = useState(null);

  const[addToCart,setaddToCart] = useState([]);
   //==== my cart =====//
   const [fullscreen, setFullscreen] = useState(true);
   const [show5, setShow5] = useState(false);
  
  const handleClickMyCart = (breakpoint) => {
    
    setFullscreen(breakpoint);
    setShow5(true);
  };

 
 

  const handleClickOrder = (event) => {
    setShow3(!show3);
    setTarget(event.target);
   
  };

  useEffect(() => {
    const url = "http://localhost:5000/product/api/details";

    axios
      .get(url)
      .then((res) => {
        // console.log(res.data[1].image);

        setPostData(res.data);

        // console.log(postData);
      })
      .catch((err) => {
        console.log(err);
      });


      const url2 ="http://localhost:5000/addtocart/api/details"


      axios.get(url2).then((res)=>{
        console.log(res)
        setaddToCart(res.data)
        console.log(res.data)
      })

  }, [test]);

  
  const addtoCart =(index)=>{ 
    // console.log(postData[index])
    

    const addcart ={
      image:postData[index].image,
      productname : postData[index].productname,
      productdetails :postData[index].productdetails,
      productquantity :postData[index].productquantity,
      perkg : postData[index].perkg
    }
    console.log(addcart)

const url="http://localhost:5000/addtocart/post"

axios.post(url,addcart).then((res)=>{

  console.log(res);
  setTest(res);
 
  

})
  }

  const RemoveCart =(index)=>{
    const url= "http://localhost:5000/addtocart/api/details/data"

    const delCart ={
      image:addToCart[index].image,
      productname : addToCart[index].productname,
      productdetails :addToCart[index].productdetails,
      productquantity :addToCart[index].productquantity,
      perkg : addToCart[index].perkg
    }
    axios.delete(url,delCart).then((res)=>{
      console.log("delcart",res)
      setTest(true);
    })

  }




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
            <DropdownButton id="dropdown-basic-button" title="more">
      <Dropdown.Item  href="/Home"><i class="fa-solid fa-user-group"></i>Switch Role</Dropdown.Item>
      <Dropdown.Item href="/Login" ><i class="fa-solid fa-right-from-bracket"></i>Log Out</Dropdown.Item>
    
    </DropdownButton>
          </Navbar.Collapse>

        
        </Container>
      </Navbar>

      {/* my cart overlay */}
      
      <Modal show={show5} fullscreen={fullscreen} onHide={() => setShow5(false)}>
        <Modal.Header closeButton style={{backgroundColor:"lightgreen"}}>
          <Modal.Title style={{backgroundColor:"lightgreen"}}>my cart</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor:"lightgreen"}}>
        { addToCart ?. length > 0 && addToCart.map((data,index)=>{
           
             return(
              <>
           
          <Card style={{backgroundColor:"lightgreen"}}>
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
                {data.perkg}  RS PER KG 
                </Card.Text>

                <Card.Text >
                <i class="fa-solid fa-truck-fast"></i> expected delevery within 2days
                </Card.Text>

                <Button variant="success"  onClick={()=>{RemoveCart(index)}} size="sm" ><i class="fa-solid fa-cart-shopping"></i> REMOVE TO CART</Button>
                <Button variant="white" onClick={handleClickOrder} style={{borderColor:"black",marginLeft:"40px"}} size="sm" className="justify-content-end"> <i class="fa-solid fa-handshake"></i> ORDER</Button>
              </Card.Body>

          </Card>
           
           
           </>
             )
             
           })}
        </Modal.Body>
      </Modal>   

    
      {postData.length > 0 &&
        postData.map((data,index) => {
          return (
            <Card className="cards" style={{ width: "18rem", float: "left", margin: "10px",backgroundColor:"lightgreen" }}>
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
                <b style={{color:"green"}} >PER KG</b>   {data.perkg} /<b style={{color:"green"}} >RS</b>

                </Card.Text>

                <Card.Text >
                <i class="fa-solid fa-truck-fast"></i> expected delevery within 2days
                </Card.Text>

                <Button variant="success"  onClick={()=>{addtoCart(index)}} size="sm" ><i class="fa-solid fa-cart-shopping"></i> ADD TO CART</Button>
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
