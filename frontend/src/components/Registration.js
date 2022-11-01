import React, { useState } from "react";
import "./Registration.css";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from 'axios'

import {
  AppBar,
  Button,
  Card,
  CardActionArea,
  Chip,
  Grid,
  Link,
  TextField, Typography
 
} from "@mui/material";
import { useNavigate } from "react-router-dom";




const validationSchema = yup.object({
  username: yup.string("enter your name").required("name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  confirmpassword: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const Registration = () => {
  const [confirmpassword, setconfirmpassword] = useState(false);
  const [showform, setshowform] = useState(false);
  const [showlogin,setshowlogin] = useState(false);

 const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema: validationSchema,

    onSubmit: (values) => {
      if (values.password === values.confirmpassword) {
        let post = {name:values.username,email:values.email,password:values.password}
        axios.post('http://localhost:3001/post',post).then(res=>console.log(res))
        navigate("/Home")
        console.log(post);
      } else {
        setconfirmpassword(true);
      }
    },
  });

  const showRegisterForm = () => {
    setshowform(true);
    setshowlogin(false)
  };

const showloginfrom =() =>{
  
  setshowlogin(true)

  
}


  return (
    <>
    <AppBar color={'transparent'} > <h1 style={{ fontSize:"40px",color: "black",marginLeft:"150px ",width:"300px"}}>E-ULAVAN </h1>   </AppBar>
     
        
    <Card style={{marginLeft:"10px", marginTop:"100px",backgroundColor: "hsla(180, 57%, 90%, 0.664)",color:"black"}} sx={{ maxWidth: 345 }}>
<CardActionArea>
<Typography variant="body2" color="text.secondary">
   <h1> who ploughing eat their food,they truely live:<div></div>the rest to
          others bend subservient,eating that they give...</h1>
    </Typography>
  
</CardActionArea>


  <Button size="large" color="primary" onClick={showloginfrom}>
   <h4>LOGIN TO CONTINUE</h4> 
  </Button>
 
</Card>
{/* loginform */}



{showlogin === true &&
<CardActionArea
style={{
  
  marginTop: "-250px",
  backgroundColor: "hsla(180, 57%, 90%, 0.664)",
  width: "350px",
  // margin: "auto",
  marginLeft:"800px",
  alignItems: "center",
 borderRadius:"30px" 
}}
>
<h1 style={{ marginLeft: "120px" }}>log in</h1>
<form
  style={{ margin: "auto", alignItems: "center" }}
  onSubmit={formik.handleSubmit}
>
 
  <TextField
    style={{ margin: "10px", width: "300px" }}
    id="email"
    name="email"
    label="Email"
    value={formik.values.email}
    onChange={formik.handleChange}
    error={formik.touched.email && Boolean(formik.errors.email)}
    helperText={formik.touched.email && formik.errors.email}
  />

  <TextField
    style={{ margin: "10px", width: "300px" }}
    id="password"
    name="password"
    label="Password"
    type="password"
    value={formik.values.password}
    onChange={formik.handleChange}
    error={formik.touched.password && Boolean(formik.errors.password)}
    helperText={formik.touched.password && formik.errors.password}
  />
 
  <div>
    <Button
      style={{ marginLeft: "120px" }}
      color="primary"
      variant="contained"
      type="submit"
    >
      LOGIN
    </Button>
    <div>OR</div>
    
    <Link style={{marginBottom:"200px", marginLeft: "70px",fontSize:"20px"}} onClick={showRegisterForm}>i don't have an account</Link>
  </div>
 
</form>
</CardActionArea>
}



{/* registration form */}
      {showform === true && (
        <CardActionArea
          style={{
            marginBottom:"30px",                                                                                                           
            marginTop: "-250px",
            backgroundColor: "hsla(180, 57%, 90%, 0.664)",
            width: "350px",
            // margin: "auto",
            marginLeft:"800px",
            alignItems: "center",
           borderRadius:"30px" 
          }}
        >
          <h1 style={{ marginLeft: "120px" }}>Register</h1>
          <form
            style={{ margin: "auto", alignItems: "center" }}
            onSubmit={formik.handleSubmit}
          >
            <TextField
              style={{ margin: "10px", width: "300px" }}
              id="username"
              name="username"
              label="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
            <TextField
              style={{ margin: "10px", width: "300px" }}
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />

            <TextField
              style={{ margin: "10px", width: "300px" }}
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <TextField
              style={{ margin: "10px", width: "300px" }}
              id="confirmpassword"
              name="confirmpassword"
              label="confirmpassword"
              type="password"
              value={formik.values.confirmpassword}
              onChange={formik.handleChange}
              error={
                formik.touched.confirmpassword &&
                Boolean(formik.errors.confirmpassword)
              }
              helperText={
                formik.touched.confirmpassword && formik.errors.confirmpassword
              }
            />
            {confirmpassword === true && (
              <div style={{ color: "red" }}>your password doesn't match</div>
            )}
            <div>
              <Button
                style={{ marginLeft: "120px" }}
                color="primary"
                variant="contained"
                type="submit"
              >
                register
              </Button>
            </div>
          </form>
        </CardActionArea>
      )}
    </>
  );
};

export default Registration;







{/* <Card sx={{ maxWidth: 345 }}>
<CardActionArea>
  <CardMedia
    component="img"
    height="140"
    image="/static/images/cards/contemplative-reptile.jpg"
    alt="green iguana"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      E-ULAVAN...
    </Typography>
    <Typography variant="body2" color="text.secondary">
    who ploughing eat their food,they truely live:<div></div>the rest to
          others bend subservient,eating that they give...
    </Typography>
  </CardContent>
</CardActionArea>
<CardActions>
  <Button size="small" color="primary">
    GET started
  </Button>
</CardActions>
</Card> */}
