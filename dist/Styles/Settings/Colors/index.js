"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = require("styled-components");

var _palette = require("./palette");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  :root {\n    --color-first: ", ";\n    --color-second: ", ";\n    --color-third: ", ";\n\n    --color-black-first: ", ";\n    --color-black-second: ", ";\n    --color-black-third: ", ";\n    --color-black-fourth: ", ";\n\n    --color-error: ", ";\n    --color-warning: ", ";\n    --color-success: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Colors = (0, _styledComponents.createGlobalStyle)(_templateObject(), _palette.palette.colorFirst, _palette.palette.colorSecond, _palette.palette.colorThird, _palette.palette.colorBlackFirst, _palette.palette.colorBlackSecond, _palette.palette.colorBlackThird, _palette.palette.colorBlackFourth, _palette.palette.colorError, _palette.palette.colorWarning, _palette.palette.colorSuccess);
var _default = Colors;
exports.default = _default;