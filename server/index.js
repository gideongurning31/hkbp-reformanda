"use strict";
require("./core/environment");
const express = require("express");
const app = express();
const controllers = require("./controller");
// const model = require("./model");
const middleware = require("./middleware");
const distPath = "../dist/hkbp-reformanda";

// Front end application
app.disable("etag");
app.use(express.static(distPath));

// REST API service
app.get("/", (req, res) => res.sendFile("index.html", { root: distPath }));
app.get("/api", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.status(200).json({ message: "OK" });
});

app.use(middleware.before);
app.use(controllers);
app.use(middleware.after);

function run() {
  app.listen(process.env.BASE_PORT || 8080).on("listening", () => {
    console.info(`${process.env.APP_NAME} is running on ${process.env.BASE_URL}:${process.env.BASE_PORT}`);
  });
}

function onError(error) {
  console.error(`An error occured while connecting to database ${process.env.DB_NAME}.`);
  console.error(error);
  process.exit(-1);
}

module.exports = function() {
  // model.sequelize
  //   .authenticate()
  //   .then(() => run())
  //   .catch(error => onError(error));
  run();
}
