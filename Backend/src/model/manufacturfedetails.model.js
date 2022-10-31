const mongoose = require('mongoose')
const manufacture_Details = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    phonenumber: {
        type: Number,
    },
    aadhaarnumber: {
       type: Number,
    },
    address: {
        type: String,
    }
})
module.exports = mongoose.model('manufacturedetails', manufacture_Details);