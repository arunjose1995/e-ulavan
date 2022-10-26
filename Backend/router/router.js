const controller = require('../controll/controller')
const middleware =require('../middleware/middleware')
const jwt=require('jsonwebtoken')
const express = require('express')
const app = express.Router();
app.post('/post',middleware,controller.postdetails)
app.post('/login',middleware,controller.login)
app.get('/api/details',controller.getdetails)
app.get('/api/details/:id',controller.getAlldetails)
app.put('/api/details/data',controller.updateAlldetails)
app.put('/api/details/data/:id',controller.updatedetails)
app.delete('/api/details/data/:id',controller.removeAlldetails)
app.delete('/api/details/data',controller.removedetails)

module.exports=app;