"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextShadow = void 0;

var _styledComponents = require("styled-components");

var _palette = require("../../Settings/Colors/palette");

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  text-shadow: ", " ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  text-shadow: ", " var(--color-black-first);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  text-shadow: ", " var(--color-black-first);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var sizes = {
  small: '0.5rem 0.5rem 0px',
  medium: '1rem 1rem 0px'
};
var small = (0, _styledComponents.css)(_templateObject(), sizes.small);
var medium = (0, _styledComponents.css)(_templateObject2(), sizes.medium);

var colorSize = function colorSize(color, size) {
  return (0, _styledComponents.css)(_templateObject3(), sizes[size], _palette.palette[color]);
};

var TextShadow = {
  small: small,
  medium: medium,
  colorSize: colorSize
};
exports.TextShadow = TextShadow;