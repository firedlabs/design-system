"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = require("styled-components");

var _Tools = require("../../Tools");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  a:hover {\n    ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Text = (0, _styledComponents.createGlobalStyle)(_templateObject(), _Tools.Cursor.hover);
var _default = Text;
exports.default = _default;