import React, { useState } from "react";
import { useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import axios from "axios";
import { useNavigate ,NavLink } from "react-router-dom";

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
  confirmpassword: yup.string()
  .oneOf([yup.ref('password'), null], 'Passwords must match')
});

const Registration1 = () => {
  
  const [handleError,setHandelError]=useState("")

  const Navigate=useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      let post = {
        name: values.username,
        email: values.email,
        password: values.password,
      };
      axios
        .post("http://localhost:5000/post", post)
        .then((res) => {
          if(res.status===200){
            Navigate("/Login")
          }
        })
        .catch((res) => {
          if(res.response.status===400){
            setHandelError(res.response.data)
          }
        });
    },
  });
  
  return (
    <>
      <Container style={{ marginTop: "150px" }}>

        {handleError!=="" && <div style={{display:'flex',justifyContent:'center'}}>
            <h3 style={{backgroundColor:'#B8CFE6',borderRadius:'5px',width:'500px',textAlign:'center'}}>{handleError}</h3>
          </div>}

        <Row style={{ alignItems: "center", justifyContent: "center" }}>
          <Form
            onSubmit={formik.handleSubmit}
            style={{
              width: "500px",
              backgroundColor: "white",
              borderRadius: "20px",
            }}
          >
            <h1 style={{ textAlign: "center" }}>SignUp</h1>

            <Form.Control
              placeholder="Username"
              id="username"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              className={
                formik.touched.username && formik.errors.username
                  ? "error"
                  : null
              }
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="error-message">{formik.errors.username}</div>
            ) : null}

            <Form.Control
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className={
                formik.touched.email && formik.errors.email ? "error" : null
              }
              style={{ marginTop: "10px", marginBottom: "10px" }}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error-message">{formik.errors.email}</div>
            ) : null}

            <Form.Control
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              className={
                formik.touched.password && formik.errors.password
                  ? "error"
                  : null
              }
              style={{ marginTop: "10px", marginBottom: "10px" }}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error-message">{formik.errors.password}</div>
            ) : null}

            <Form.Control
              type="password"
              placeholder="ConfirmPassword"
              id="confirmpassword"
              name="confirmpassword"
              value={formik.values.confirmpassword}
              onChange={formik.handleChange}
              className={
                formik.touched.confirmpassword && formik.errors.confirmpassword
                  ? "error"
                  : null
              }
              style={{ marginTop: "10px", marginBottom: "10px" }}
            />
            {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
              <div className="error-message">
                {formik.errors.confirmpassword}
              </div>
            ) : null}

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "12px",
              }}
            >
              <Button variant="success" type="submit">
                Login
              </Button>
            </div>

            <div style={{display:'flex',justifyContent:'center',marginBottom:'10px'}}>
              <NavLink to="/Login" style={{textDecoration:'none'}}>Already have an account Login?</NavLink>
            </div>
          </Form>
        </Row>
      </Container>
    </>
  );
};

export default Registration1;
