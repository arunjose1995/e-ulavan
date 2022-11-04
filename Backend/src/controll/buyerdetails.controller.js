const Buyer = require('../model/buyerdetails.model');
const config = require('../../config/config');

const postdetails = async (req, res) => {
    const buyerdetails = {
            name: req.body.name,
            mobilenumber: req.body.mobilenumber,
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
