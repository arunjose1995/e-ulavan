const logger = require("morgan");
const rfs = require("rotating-file-stream");
const express = require("express");
const path = require("path");

const app = express();

const rfsStream = rfs.createStream("log.txt", {
  size: "10M",
  interval: "1d",
  path: path.join(__dirname, "log"),
});

app.use(
  logger("dev", {
    stream: rfsStream,
  })
);

app.use(logger("dev"));
