"use strict";
const Router = require("express").Router();
const Loader = require("../core");
const loader = new Loader();

loader.registerControllers();
let controllers = loader.getModules();
Object.keys(controllers).forEach(controller => {
  controller = controllers[controller];
  Router.use(controller.routes());
  console.log(`Controller ${controller.constructor.name} is registered to path ${controller.route}.`);
});

module.exports = Router;
