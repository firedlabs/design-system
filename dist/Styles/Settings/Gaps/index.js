"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = require("styled-components");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  :root {\n    --gap-smallest: 10px;\n    --gap-small: 15px;\n    --gap-medium: 20px;\n    --gap-big: 40px;\n    --gap-biggest: 80px;  \n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Gaps = (0, _styledComponents.createGlobalStyle)(_templateObject());
var _default = Gaps;
exports.default = _default;