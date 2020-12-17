"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = require("styled-components");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  :root {\n    --color-first: #F25A70;\n    --color-second: #7C5E99;\n    --color-third: #FFF;\n\n    --color-black-first: #000;\n    --color-black-second: #3A4042;\n    --color-black-third: #828282;\n\n    --color-error: #BA1F33;\n    --color-warning: #CEB02A;\n    --color-success: #62C370;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Colors = (0, _styledComponents.createGlobalStyle)(_templateObject());
var _default = Colors;
exports.default = _default;