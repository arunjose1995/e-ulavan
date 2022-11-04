const User = require('../model/addtocart.model');
const config = require('../../config/config');
const postdetails = async (req, res) => {

  const addtocartdetails = {
    image: req.body.image,
    productname: req.body.productname,
    productId:req.body.productId,
    productdetails: req.body.productdetails,
    productquantity: req.body.productquantity,
    perkg:req.body.perkg
  };
  
  const result = await User.create(addtocartdetails);
  res.send({ result })


}
  
const getAlldetails =async(req,res) => {
    const data = await User.find()
    console.log( data);
    res.send(data);
    }; 
  
       
   const getdetails=async(req,res) => {
      const data = await User.find({ productId:req.body.productId})
      console.log( data);
      res.send(data);
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
    removedetails,
    removeAlldetails

  };
   
   