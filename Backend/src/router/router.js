const jwt = require('jsonwebtoken');
const express = require('express');
const cors = require('cors');
const registrationController = require('../controll/register.controller');
const buyerdetails = require('../controll/buyerdetails.controller');
const manufacturedetails = require('../controll/manufacturedetails.controller');
const middleware = require('../middleware/registration.middleware');

const app = express.Router();
app.use(cors({
    origin: '*'
}));

app.post('/post', middleware.User,registrationController.postdetails);
app.post('/buyer',registrationController.postdetails);
app.post('/manufacture',registrationController.postdetails);
app.get('/api/details', registrationController.getAlldetails);
app.get('/api/details/:id', registrationController.getdetails);
app.put('/api/details/data', registrationController.updateAlldetails);
app.put('/api/details/data/:id', registrationController.updatedetails);
app.delete('/api/details/data/:id', registrationController.removeAlldetails);
app.delete('/api/details/data', registrationController.removedetails);

module.exports = app;
