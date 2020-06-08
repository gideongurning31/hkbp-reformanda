"use strict";
const cors = require("cors");
const helmet = require("helmet");
const moment = require("moment");
const compression = require("compression");
const fileupload = require("express-fileupload");
const bodyParser = require("body-parser");
const requestSanitizer = require("express-sanitize-escape");
const Router = require("express").Router();

Router.all("*", (req, res, next) => {
  req.app.set("request-timestamp", moment().valueOf());
  res.on("finish", () => {
    if (req.method && req.method.toLowerCase() !== "options") {
      console.info(`${res.statusCode} : ${req.method} ${req.url}`);
      if (res.statusCode === 400 || res.statusCode === 403 || res.statusCode === 500) {
        console.info(`${res.statusCode} : ${req.method} ${req.url}`);
        console.info(`body ${JSON.stringify(req.body)}`);
      }
    }
  });
  next();
});

let corsOptions = {
  methods: "GET,POST,PUT,DELETE",
  optionsSuccessStatus: true,
};

Router.use(cors(corsOptions));
Router.use(helmet());
Router.use(compression());
Router.use(fileupload({ limit: { fileSize: process.env.MAX_FILE_UPLOAD_SIZE } }));
Router.use(bodyParser.urlencoded({ extended: true }));
Router.use(bodyParser.json({ limit: "50mb" }));
Router.use(requestSanitizer.middleware());

module.exports = Router;
