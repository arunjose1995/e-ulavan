const jwt = require('jsonwebtoken');
const express = require('express');
const cors = require('cors');
const controller = require('../controll/register.controller');
const buyerdetails = require('../controll/buyerdetails.controller');
const manufacturedetails = require('../controll/manufacturedetails.controller');
const middleware = require('../middleware/registration.middleware');

const app = express.Router();
app.use(cors({
    origin: '*'
}));

app.post('/post', middleware.User,controller.postdetails);
app.post('/buyer/login',controller.login);
app.post('/manufacture',controller.postdetails);
app.get('/api/details', controller.getAlldetails);
app.get('/api/details/:id', controller.getdetails);
app.put('/api/details/data', controller.updateAlldetails);
app.put('/api/details/data/:id', controller.updatedetails);
app.delete('/api/details/data/:id', controller.removeAlldetails);
app.delete('/api/details/data', controller.removedetails);

module.exports = app;
