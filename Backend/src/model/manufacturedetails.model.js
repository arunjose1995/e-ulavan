const mongoose = require('mongoose')
const manufacture_Details = new mongoose.Schema({
    name: {
        type: String,
    },
    mobilenumber: {
        type: Number,
    },
    
    address: {
        type: String,
    },
    bio: {
        type: String,
    },
})
module.exports = mongoose.model('manufacturedetails', manufacture_Details);