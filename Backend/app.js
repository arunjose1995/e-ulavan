const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require("mongoose");
const fileuplaod = require('express-fileupload')
const config = require("./config/config");
const router = require("./src/router/router");
const logger = require("./logger");
const cors = require('cors');
const nodemailer = require('nodemailer');
  


const app = express();
app.use(express.json());
app.use(fileuplaod())
app.use(cors({ origin: '*'}));
app.use(router);
mongoose
  .connect(config.URL)
  .then(() => console.log("connected to mongose.."))
  .catch((err) => console.log("could not connect to mongoDB...", err));
port = config.PORT;
app.listen(port, () => {
  console.log(`Lisening the sever ${port}....`);
});
