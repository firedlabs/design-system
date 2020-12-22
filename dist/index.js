"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Styles = require("./Styles");

Object.keys(_Styles).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Styles[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Styles[key];
    }
  });
});

var _components = require("./components");

Object.keys(_components).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _components[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _components[key];
    }
  });
});

var _palette = require("./Styles/Settings/Colors/palette");

Object.keys(_palette).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _palette[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _palette[key];
    }
  });
});