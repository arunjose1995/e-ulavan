const User = require('../model/manufacturedetails.model');
const config = require('../../config/config.json');
const postdetails = async (req, res) => {
  console.log(req.body);
  let user = await User.findOne({ mobilenumber: req.body.mobilenumber });
  if (user) return res.status(400).send('user already register');
    user = {
        name: req.body.name,
        mobilenumber: req.body.mobilenumber,
        address: req.body.address,
        bio: req.body.bio
    }
    const result = await user.save();
    console.log(result);
    res.send(result)
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
            mobilenumber: req.body.mobilenumber,
            address: req.body.address,
            bio:req.body.bio
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
            mobilenumber: req.body.mobilenumber,
            address: req.body.address,
            bio:req.body.bio
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
      getdetails,
      updateAlldetails,
      updatedetails,
      removedetails,
      removeAlldetails
     }
   
