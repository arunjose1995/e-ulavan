const express = require('express');
const mongoose = require("mongoose");
const config = require("./config/config.json");
const router = require("./src/router/router");
const logger = require("./logger");
const cors = require('cors');


const app = express();
app.use(express.json());
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
