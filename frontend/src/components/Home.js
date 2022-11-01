import React from "react";
import {
  AppBar,
  Toolbar,
  ThemeProvider,
  createTheme,
  Typography,
  Box,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import PostAddIcon from "@mui/icons-material/PostAdd";
import HomeIcon from "@mui/icons-material/Home";
import { useState } from "react";
import { ListItem, ListItemText, ListItemAvatar } from "@mui/material";
import HomeCard from "./HomeCard";
import axios from "axios";
import { Modal, Button, Form, Image } from "react-bootstrap";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0cf264",
    },
    secondary: {
      main: "#859CB3",
    },
  },
});

const Home = () => {
  const [open, setOpen] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [alert, setAlert] = useState(false);


// post product details//
const[productName , setProductName] = useState("");
const[productQuantity,setProductQuantity] = useState("")
const[productDetails,setproductDetails] =useState("")
 const [image, setImage] = useState(null);

const [posts,setposts]= useState("")


  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

const postProduct =()=>{
  if( productName !== "" && productQuantity !=="" && productDetails !== "" && image !=="" ){
    const postp ={
      productname : productName,
      productquantity :productQuantity,
      productdetails:productDetails,
      image: image ,
    }
    const url = "http://localhost:5000/product/postdetails/post";

    axios.post(url, postp).then((res) => {
      console.log(res);
    });

    setposts(postp)
    console.log(posts)

  }else{


    setAlert(true);

  }
 
}

const getitems =()=>{
  const url = "http://localhost:5000/product/api/details";

  axios.get(url).then((res) => {

    console.log(res);

  }).catch((err) =>{

    console.log(err);
  })

}




  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar style={{ backgroundColor: theme.primary }}>
          <Toolbar
            sx={{
              alignItems: "space-between",
              justifyContent: "space-between",
            }}
          >
            <MenuIcon size="md" onClick={() => setOpen(true)} />
            <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
              <ListItem>
                <ListItemAvatar>
                  <HomeIcon />
                </ListItemAvatar>
                <ListItemText primary="Home" sx={{ paddingRight: 5 }} />
              </ListItem>
            </Drawer>
            <Typography variant="h4" component={"h3"}>
              E-ULAVAN
            </Typography>
            <Box>
              <PostAddIcon
                size="md"
                style={{ marginLeft: "-300px" }}
                onClick={handleShow}
              />

              <MarkEmailUnreadIcon size="md" style={{ marginLeft: "100px" }} />
            </Box>
          </Toolbar>
        </AppBar>

        <Toolbar />
      </ThemeProvider>

<button onClick={getitems}>check</button>

      {/* this is for post products */}

      <Modal
        show={show}
        onHide={handleClose}
        size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
        backdrop="static"
        style={{marginTop:"20px"}}
       
      >
        <Modal.Header closeButton>
          <Modal.Title>POST PRODUCTS</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <Form 
        
              >

<Form.Group
             
              className="mb-3"
              controlId="exampleForm.ControlInput1"
            >
              <Image
              
                src={image}
                style={{maxWidth:"300px"}}
                alt="preview image"
              />
              <Form.Control
                type="file"
                accept="image/jpg,image/jpeg,image/img"
                onChange={onImageChange}
                size="sm"
                style={{ maxWidth: "300px" }}
                className="filetype"
              />
            </Form.Group>
           

          <Form.Group className="mb-3"controlId="exampleForm.ControlTextarea1" >
             name
              <Form.Control placeholder="Enter Your Name...." style={{ maxWidth: "300px" }}
                onChange={(e) => setProductName(e.target.value)} />
            </Form.Group>
          
            <Form.Group className="mb-3"    controlId="exampleForm.ControlTextarea1"  >
              product Quantity
              <Form.Control   placeholder="Quantity in Numbers...." type="number" style={{ maxWidth: "300px" }}
                onChange={(e) => setProductQuantity(e.target.value)}
                />
            </Form.Group>
 
           
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
              Product Details
              <Form.Control  placeholder="Enter Your product details...." as="textarea" style={{ maxWidth: "300px" }} 
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
            Close
          </Button>
          <Button variant="primary" onClick={postProduct}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

     
    </>
  );
};

export default Home;


