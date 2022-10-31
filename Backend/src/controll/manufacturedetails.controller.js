const User = require('../model/manufacturedetails.model');
const config = require('../../config/config.json');
const postdetails = async (req, res) => {
  const manufacturedetails = {
    name: req.body.name,
    mobilenumber: req.body.mobilenumber,
    address: req.body.address,
    bio: req.body.bio
  };
  console.log(req.body);
  let user = await User.findOne({ mobilenumber: req.body.mobilenumber });
  console.log("fcrfc",user);
  if (user) {
   return  res.status(400).send('manufacture already register');
  }
  const result = await User.create(manufacturedetails);
  res.send({ result })


}
  
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
  module.exports = {
    postdetails,
    getAlldetails,
    getdetails,
    updateAlldetails,
    updatedetails,
    removedetails,
    removeAlldetails
  };
   
