"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Typograph = require("./Typograph");

Object.keys(_Typograph).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Typograph[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Typograph[key];
    }
  });
});

var _BoxShadow = require("./BoxShadow");

Object.keys(_BoxShadow).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _BoxShadow[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _BoxShadow[key];
    }
  });
});

var _TextShadow = require("./TextShadow");

Object.keys(_TextShadow).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _TextShadow[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TextShadow[key];
    }
  });
});

var _Frame = require("./Frame");

Object.keys(_Frame).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Frame[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Frame[key];
    }
  });
});