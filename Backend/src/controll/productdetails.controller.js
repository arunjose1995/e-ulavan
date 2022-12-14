const User = require('../model/productdetails.model');
const config = require('../../config/config');
const postdetails = async (req, res) => {

  const productdetails = {
    image: req.body.image,
    productname: req.body.productname,
    productdetails: req.body.productdetails,
    productquantity: req.body.productquantity,
    perkg:req.body.perkg
  };
  console.log(productdetails);
  let user = await User.findOne({ productname: req.body.productname});
  const result = await User.create(productdetails);
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
          $set: {
          image: req.body.image,
          productname: req.body.productname,
          productdetails: req.body.productdetails,
          productquantity: req.body.productquantity,
          asperkg:req.body.asperkg
          }
      });
      console.log(result);
      res.send(result);
      };
      
     const updatedetails=async(req,res)=>{
      const result = await User.updateOne({_id:req.params.id},
          {
          $set:{
              image: req.body.image,
            productname: req.body.productname,
            productdetails: req.body.productdetails,
              productquantity: req.body.productquantity,
              asperkg:req.body.asperkg
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
    removeAlldetails,
    
  };
   
   