const jwt = require('jsonwebtoken');
const express = require('express');
const controller = require('../controll/controller');
const middleware = require('../middleware/middleware');

const app = express.Router();+
app.post('/post', controller.postdetails);
// app.post('/login', middleware, controller.login);
app.get('/api/details', controller.getAlldetails);
app.get('/api/details/:id', controller.getdetails);
app.put('/api/details/data', controller.updateAlldetails);
app.put('/api/details/data/:id', controller.updatedetails);
app.delete('/api/details/data/:id', controller.removeAlldetails);
app.delete('/api/details/data', controller.removedetails);

module.exports = app;
