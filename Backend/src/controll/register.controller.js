
const User = require('../model/registration.model');
const jwt = require('jsonwebtoken');
const config = require('../../config/config.json');
const bcrypt = require('bcrypt');
// const express=require('express')
const postdetails = async (req, res) => {
  console.log(req.body);
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send('user already register');
  user = new User({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  });
    // res.send(user);
  const token = jwt.sign({ _id: user._id }, config.JWTSECREATEKEY);
  req.header;
  console.log(req.header);
  // res.header('x-auth-token',token).send(result)
  res.send({user:user, token: token });
};
const login = async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  console.log(user);
  if (!user) return res.status(400).send('password incorrect');
  res.status(200).send('user registered');

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
   
