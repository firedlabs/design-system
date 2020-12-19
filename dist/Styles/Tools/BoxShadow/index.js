"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxShadow = void 0;

var _styledComponents = require("styled-components");

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  box-shadow: 1rem 1rem 0px var(--color-black-first);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  box-shadow: 0.5rem 0.5rem 0px var(--color-black-first);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var small = (0, _styledComponents.css)(_templateObject());
var medium = (0, _styledComponents.css)(_templateObject2());
var BoxShadow = {
  small: small,
  medium: medium
};
exports.BoxShadow = BoxShadow;