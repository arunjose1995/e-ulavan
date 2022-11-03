
const User = require('../model/registration.model');
const jwt = require('jsonwebtoken');
const config = require('../../config/config.json');
const bcrypt = require('bcrypt');
// const express=require('express')
const postdetails = async (req, res) => {
 const userDetails = {
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  };
  console.log(req.body);
  let user = await User.findOne({ email: req.body.email });
  console.log(user);
  if (user) {
    return res.status(400).send('user already register');
  }
  const result = await User.create(userDetails);
  console.log(result);
  const token = jwt.sign({  user }, config.JWTSECREATEKEY);

  // res.header('x-auth-token',token).send(result)
  res.send({user:result,token:token});
};
const login = async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  console.log(user);
  if (!user) return res.status(401).send('password incorrect');
  var passwordIsValid = bcrypt.compareSync(
    req.body.password,
    user.password
  );

  if (!passwordIsValid) {
    return res.status(401).send({
      accessToken: null,
      message: "Invalid Password!"
    });
  }
  else {
    var token = req.header['x-access-token']
    var token = jwt.sign({ id: user.id }, config.JWTSECREATEKEY, {
      expiresIn: 864000
    });
    return res.status(200).send({
      message: "login sucessfully",
      token:token
    })
}
};
const getAlldetails =async(req,res) => {
    const data = await User.find()
    console.log( data);
    res.send(data);
    }; 
  
       
   const getdetails=async(req,res) => {
      const data = await User.findOne({_id:req.params.id})
      console.log( data);
      res.send(data);
      };
  
  const  updateAlldetails=async(req,res)=>{
      const result = await User.updateMany({
          $set:{
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            conformpassword: req.body.conformpassword
          }
      });
      console.log(result);
      res.send(result);
      };
      
     const updatedetails=async(req,res)=>{
      const result = await User.updateOne({_id:req.params.id},
          {
          $set:{
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            conformpassword: req.body.conformpassword
          }
      });
      console.log(result);
      res.send(result);
  };
  
  const removedetails=async(req,res)=>{
      const result = await User.deleteOne(req.params.id)
      console.log(result)
      res.send(result)
  };
  
  const removeAlldetails=async(req,res)=>{
      const result = await User.deleteMany();
      console.log(result);
      res.send(result)
  }
   module.exports={
       postdetails,
      getAlldetails,
      login,
      getdetails,
      updateAlldetails,
      updatedetails,
      removedetails,
      removeAlldetails
     }
   
