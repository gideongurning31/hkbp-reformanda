"use strict";
const Router = require("express").Router();
const Loader = require("../core");
const loader = new Loader();

loader.register("controller");
let modules = loader.getModules();
Object.keys(modules).forEach(controller => {
  controller = modules[controller];
  Router.use(controller.routes());
  console.log(`Controller [${controller.constructor.name}] has been registered`);
});

module.exports = Router;
