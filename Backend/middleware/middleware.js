const joi = require("joi");
const User = async (req, res, next) => {
try {
    const cards = joi.object({
        name: joi.string().required(),
        email: joi.string().required(),
        password:joi.string().required()
    });
    await cards.validateAsync(req.body)
    next()
} catch (error) {
    res.send(error)
   console.log(error); 
}
};
module.exports = User;