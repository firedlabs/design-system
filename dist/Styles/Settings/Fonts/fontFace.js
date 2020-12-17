"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = require("styled-components");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  @font-face {\n    font-family: ", ";\n    src: url(", ");\n    font-weight: ", ";\n    font-style: normal;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var fontFace = function fontFace(family, src, weight) {
  return (0, _styledComponents.css)(_templateObject(), family, src, weight);
};

var _default = fontFace;
exports.default = _default;