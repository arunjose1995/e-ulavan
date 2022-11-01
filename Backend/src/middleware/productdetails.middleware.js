const joi = require("joi");

const User = async (req, res, next) => {
  try {
    const cards = joi.object({
        image: req.body.image,
        productname: req.body.productname,
        productdetails: req.body.productdetails,
        productquantity:req.body.productquantity
    });
    await cards.validateAsync(req.body);
    next();
  } catch (error) {
    res.send(error);
    console.log(error);
  }
};
module.exports = { User };
