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

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});



const Login = () => {

  const [userData,setUserData]=useState(null)

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  useEffect(()=>{
  axios.get('http://localhost:3001/api/details').then(res=>console.log(res))
    
  },[])
  return (
    <>
      <Container style={{marginTop:'180px'}}>
        <Row style={{ alignItems: "center", justifyContent: "center" }}>
          <Form
            onSubmit={formik.handleSubmit}
            style={{ width: "600px", backgroundColor: "white",borderRadius:'20px' }}
          >
            <h1 style={{textAlign:'center'}}>Login</h1>
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
              style={{marginTop:'10px',marginBottom:'10px'}}
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
                formik.touched.password && formik.errors.password ? "error" : null
              }
              style={{marginTop:'10px',marginBottom:'10px'}}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error-message">{formik.errors.password}</div>
            ) : null}
            <div style={{display:'flex',justifyContent:'center',marginBottom:'15px'}}>
            <Button variant="success" type="submit">
              Success
            </Button>
            </div>
          </Form>
        </Row>
      </Container>
    </>
  );
};

export default Login;

{
  /* <form onSubmit={formik.handleSubmit}>
        <TextField

          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button
          variant="contained"
          type="submit"
        >
            LOGIN
        </Button>
      </form> */
}
