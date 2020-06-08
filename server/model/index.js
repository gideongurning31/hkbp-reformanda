"use strict";
const Sequelize = require("sequelize");
const db = {};

db['Sequelize'] = Sequelize;
db['sequelize'] = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    dialect: process.env.DB_DRIVER,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    logging: parseInt(process.env.SQL_LOGGING) ? (str) => log.debug(str) : false,
    pool: {
      max: parseInt(process.env.DB_POOL_MAX),
      min: parseInt(process.env.DB_POOL_MIN),
      acquire: parseInt(process.env.DB_POOL_ACQUIRE),
      idle: parseInt(process.env.DB_POOL_TIMEOUT),
    },
  }
);

if (process.env.SEQUELIZE_SYNC && process.env.SEQUELIZE_SYNC == "true") sequelize.sync();

module.exports = db;
