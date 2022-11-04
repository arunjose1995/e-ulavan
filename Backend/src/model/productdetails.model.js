const mongoose = require('mongoose')
const product_Details = new mongoose.Schema({
    productname: {
        type: String,
    },
    productId: {
        type:String,
    },
    
    productquantity: {
        type: Number,
    },
    
    productdetails: {
        type: String,
    },
    image: {
        type: String,
    },
    

})
module.exports = mongoose.model('productdetails', product_Details);