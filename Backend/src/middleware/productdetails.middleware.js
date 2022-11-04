const joi = require("joi");

const User = async (req, res, next) => {
  try {
    const cards = joi.object({
        image: joi.string().required(),
        productname:joi.string().required(),
        productdetails: joi.string().required(),
      productquantity: joi.number().required(),
      perkg:joi.number().required()
    });
    await cards.validateAsync(req.body);
    next();
  } catch (error) {
    res.send(error);
    console.log(error);
  }
};
module.exports = { User };
