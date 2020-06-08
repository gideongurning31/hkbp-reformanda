"use strict";
let self;
const BaseController = require("../core/base-controller");

class TesController extends BaseController {
  constructor() {
    super();
    self = this;
    this.registerRoutes();
  }

  registerRoutes() {
    this.router.route("/tes").get(this.get);
  }

  get(req, res, next) {
    res.status(200).json({ hello: "world" });
  }
}

module.exports = new TesController();
