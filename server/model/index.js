// "use strict";
// const Sequelize = require("sequelize");
// const path = require('path');
// const fs = require('fs');
// const db = {};

// db["Sequelize"] = Sequelize;
// db["sequelize"] = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASS,
//   {
//     dialect: process.env.DB_DRIVER,
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     logging: parseInt(process.env.SQL_LOGGING) ? (str) => log.debug(str) : false,
//     pool: {
//       max: parseInt(process.env.DB_POOL_MAX),
//       min: parseInt(process.env.DB_POOL_MIN),
//       acquire: parseInt(process.env.DB_POOL_ACQUIRE),
//       idle: parseInt(process.env.DB_POOL_TIMEOUT),
//     },
//   }
// );

// let basename = path.basename(__filename)
// fs.readdirSync(__dirname)
//   .filter((file) => file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js")
//   .forEach((file) => {
//     let model = db.sequelize["import"](path.join(__dirname, file));
//     db[model.name] = model;
//   });

// Object.keys(db).forEach((modelName) => {
//   if (db[modelName].associate) db[modelName].associate(db);
// });

// if (process.env.SEQUELIZE_SYNC && process.env.SEQUELIZE_SYNC == "true") sequelize.sync();

// module.exports = db;
