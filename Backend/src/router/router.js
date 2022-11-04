const express = require('express');
const registrationController = require('../controll/register.controller');
const tokenmiddleware = require('../middleware/auth');
const buyerdetails = require('../controll/buyerdetails.controller');
const manufacturedetails = require('../controll/manufacturedetails.controller');
const middleware = require('../middleware/registration.middleware');
const productdetails = require('../controll/productdetails.controller');
const mailnotification = require('../controll/nodemailer.controller');

const router = express.Router();


//registration
router.post('/post', middleware.User, registrationController.postdetails)
router.get('/api/details', registrationController.getAlldetails);
router.get('/api/details/:id', registrationController.getdetails);
router.put('/api/details/data', registrationController.updateAlldetails);
router.put('/api/details/data/:id', registrationController.updatedetails);
router.delete('/api/details/data/:id', registrationController.removeAlldetails);
router.delete('/api/details/data', registrationController.removedetails);

//login
router.post('/login',tokenmiddleware.authentication,registrationController.login)


//buyer
router.post('/buyer/post',buyerdetails.postdetails);

//manufacture
router.post('/manufacture/post', manufacturedetails.postdetails);
router.get('/manufacture/api/details', manufacturedetails.getAlldetails);
router.get('/manufacture/api/details/:id', manufacturedetails.getdetails);
router.put('/manufacture/api/details/data', manufacturedetails.updateAlldetails);
router.put('/manufacture/api/details/data/:id', manufacturedetails.updatedetails);
router.delete('/manufacture/api/details/data/:id', manufacturedetails.removeAlldetails);
router.delete('/manufacture/api/details/data', manufacturedetails.removedetails);

//product
router.post('/product/postdetails/post', productdetails.postdetails);
router.get('/product/api/details', productdetails.getAlldetails);
router.get('/product/api/details/:id', productdetails.getdetails);
router.put('/product/addtocart',tokenmiddleware.authentication, productdetails.addtocart);
router.put('/product/api/details/data', productdetails.updateAlldetails);
router.put('/product/api/details/data/:id', productdetails.updatedetails);
router.delete('/product/api/details/data/:id', productdetails.removeAlldetails);
router.delete('/product/api/details/data', productdetails.removedetails);

//notification
router.post('/emailnotification', mailnotification.mailNotify);


module.exports = router;
