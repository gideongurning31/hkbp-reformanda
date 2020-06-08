"use strict";
const path = require("path");
const reader = require("node-dir");

class Loader {
  constructor() {
    this.cachedModules = {
      controllers: null,
      services: null,
      models: null,
    };
    this.modules = {};
  }

  getModules() {
    return this.modules;
  }

  getFiles(filepath, keyword) {
    return reader.files(filepath, { sync: true }).filter((file) => {
      return path.basename(file).toLowerCase().lastIndexOf(keyword) > -1 && path.extname(file).toLowerCase() === ".js";
    });
  }

  register(files) {
    this.modules = {};
    for (let module of files) {
      module = require(module);
      this.modules[module.constructor.name] = module;
    }
  }

  registerControllers() {
    if (!this.cachedModules.controllers) {
      let files = path.join(process.env.APP_PATH, "controller");
      files = this.getFiles(files, "controller");
      this.register(files);
    } else {
      this.modules = this.cachedModules.controllers;
    }
  }
}

module.exports = Loader;
