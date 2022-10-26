// const { string } = require('joi')
const mongoose = require('mongoose')

const User_Details = new mongoose.Schema({
  name:{
    type:String
  },
  email:{
    type:String
  },
  password:{
    type:String
  }
})

module.exports = mongoose.model('User',User_Details)