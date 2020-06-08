"use strict";
require("./server/core/environment");
const express = require("express");
const app = express();
const distPath = "./dist/hkbp-reformanda";
const model = require("./server/model");

app.use(express.static(distPath));
app.get("*", (req, res) => res.sendFile("index.html", { root: distPath }));

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
