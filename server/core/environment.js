"use strict";
const dotenv = require("dotenv");
const path = require("path");
const dir = require("app-root-dir");
const fs = require("fs");
const moment = require("moment-timezone");
const localEnvPath = path.join(dir.get(), ".env");

process.env.BASE_PATH = dir.get();
process.env.APP_PATH = path.join(dir.get(), "server");

if (fs.existsSync(localEnvPath)) {
  dotenv.config();
  moment.tz.setDefault(process.env.TZ || "Asia/Jakarta");
}

module.exports = dotenv;
