const Buyer = require('../model/buyerdetails.model');
const config = require('../../config/config.json');

const postdetails = async (req, res) => {
    const buyerdetails = {
            name: req.body.name,
            email: req.body.email,
            mobilenumber: req.body.mobilenumber,
            aadhaarnumber: req.body.aadhaar,
            address: req.body.address

        }
    console.log(req.body);
    try {
        console.log(req.body);
  let user = await Buyer.findOne({ mobilenumber: req.body.mobilenumber });
  console.log("sdfg",user);
  if (user) {
   return  res.status(400).send('buyer already register');
  }
  const result = await Buyer.create(buyerdetails);
  res.send({ result })

    }
    catch (error) {
        res.send(error);
        console.log(error);
        

    }

}


module.exports = {
    postdetails,
    
    
}
