"use strict";
require("./server/core/environment");
const express = require("express");
const app = express();
const model = require("./server/model");
const middleware = require("./server/middleware");
const distPath = "./dist/hkbp-reformanda";

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
// Register API controllers here
app.use(middleware.after);

function start() {
  model.sequelize
    .authenticate()
    .then(() => {
      app.listen(process.env.BASE_PORT || 8080).on("listening", () => {
        console.info(`${process.env.APP_NAME} is running on ${process.env.BASE_URL}:${process.env.BASE_PORT}`)
      });
    })
    .catch((error) => {
      console.error(`An error occured while connecting to database ${process.env.DB_NAME}.`);
      console.error(error);
      process.exit(-1);
    });
}

start();
