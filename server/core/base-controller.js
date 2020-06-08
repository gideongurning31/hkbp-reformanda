"use strict";
let controller;

class BaseController {
  constructor() {
    this.router = require("express").Router();
    controller = this;
  }

  routes() {
    return this.router;
  }
}

module.exports = BaseController;
