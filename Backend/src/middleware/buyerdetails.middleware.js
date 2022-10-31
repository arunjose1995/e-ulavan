const joi = require("joi");

const User = async (req, res, next) => {
  try {
    const cards = joi.object({
      name: req.body.name,
      email: req.body.email,
      phonenumber: req.body.phonenumber,
      aadhaarnumber: req.body.aadhaar,
      address: req.body.address,
    });
    await cards.validateAsync(req.body);
    next();
  } catch (error) {
    res.send(error);
    console.log(error);
  }
};
module.exports = { User };
