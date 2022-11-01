const joi = require("joi");

const User = async (req, res, next) => {
  try {
    const cards = joi.object({
      name: req.body.name,
     phonenumber: req.body.phonenumber,
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
