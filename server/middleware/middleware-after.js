"use strict";
const Router = require("express").Router();

Router.use((req, res, next) => res.status(404).json({message: `URL '${process.env.BASE_URL}${req.originalUrl}' tidak ditemukan.`}));
module.exports = Router;
