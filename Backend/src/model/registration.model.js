const mongoose = require('mongoose')
const User_Details = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type:String
    },
    conformpassword: {
        type:String
    }
})
module.exports = mongoose.model('userDetails', User_Details);