const Buyer = require('../model/buyerdetails.model');
const config = require('../../config/config.json');

const postdetails = async (req, res) => {
    console.log(req.body);
    try {
        let buyer = await buyer.findOne({ email: req.body.email });
        if (buyer) return res.status(400).send('buyerdetails already register');
        buyer = new buyer({
            name: req.body.name,
            email: req.body.email,
            phonenumber: req.body.phonenumber,
            aadhaarnumber: req.body.aadhaar,
            address: req.body.address
    
        })
        res.send(buyer)
    }
    catch (error) {
        res.send(error);
        console.log(error);
        

    }

}


module.exports = {
    postdetails,
    
    
}
