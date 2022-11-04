const jwt = require("jsonwebtoken");
const config = require("../../config/config");

const authentication = async (req, res, next) => {
  try {
   // const token = ;
    const decoded = jwt.verify(req.headers["token"], config.JWTSECREATEKEY);
    console.log(decoded);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(404).send("Invalid TOKEN");
  }
};

module.exports={authentication}
