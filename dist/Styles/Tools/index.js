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