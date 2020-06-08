"use strict";
const BaseController = require("../core/base-controller");
const kategorial = require("../service/kategorial-service");

class KategorialController extends BaseController {
  constructor() {
    super();
    this.registerRoutes();
  }

  registerRoutes() {
    this.router.route("/api/kategorial").get(this.getAll);
  }

  getAll(req, res, next) {
    res.status(200).json({ data: kategorial.getAll() });
  }
}

module.exports = new KategorialController();
