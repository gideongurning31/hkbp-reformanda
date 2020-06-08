"use strict";
const path = require("path");
const reader = require("node-dir");

class Loader {
  constructor() {
    this.cachedModules = {
      controller: null,
      service: null,
      model: null,
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

  instantiate(files) {
    this.modules = {};
    for (let module of files) {
      module = require(module);
      this.modules[module.constructor.name] = module;
    }
  }

  register(type) {
    if (!this.cachedModules[type]) {
      let files = path.join(process.env.APP_PATH, type);
      files = this.getFiles(files, type);
      this.instantiate(files);
    } else {
      this.modules = this.cachedModules[type];
    }
  }
}

module.exports = Loader;
