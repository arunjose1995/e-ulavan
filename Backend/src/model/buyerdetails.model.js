const mongoose = require('mongoose')
const buyer_Details = new mongoose.Schema({
    name: {
        type: String,
    },
    
    phonenumber: {
        type: Number,
    },
    
    address: {
        type: String,
    }
})
module.exports = mongoose.model('buyerDetails', buyer_Details);