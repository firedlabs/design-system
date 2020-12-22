"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OptionStyle = exports.Label = exports.Description = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

var _Tools = require("../../../Styles/Tools");

var _palette = require("../../../Styles/Settings/Colors/palette");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  --border: 0.5rem solid ", ";\n\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  ", ";\n  border-top: var(--border);\n  width: 100%;\n  flex-shrink: 0;\n  padding: var(--gap-medium);\n  text-align: center;\n\n  &:nth-child(even):not(:first-child) {\n    border-left: var(--border);\n    ", ";\n  }\n\n  ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    &:first-child {\n      width: 100%;\n    }\n\n    &:nth-child(odd):not(:first-child) {\n      border-left: var(--border);\n      ", ";\n    }\n\n    &:nth-child(even):not(:first-child) {\n      border-left: none;\n    }\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    border-color: ", ";\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    display: inline-flex;\n    width: 50%;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: var(--gap-big);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: var(--color-warning);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Description = _styledComponents.default.span(_templateObject());

exports.Description = Description;

var Label = _styledComponents.default.strong(_templateObject2());

exports.Label = Label;

var hasMoreThanOne = function hasMoreThanOne(_ref) {
  var length = _ref.length;
  return length > 1 && (0, _styledComponents.css)(_templateObject3());
};

var changeColor = function changeColor(_ref2) {
  var color = _ref2.color;
  return color && (0, _styledComponents.css)(_templateObject4(), (0, _polished.transparentize)(0.6, _palette.palette[color]));
};

var isOdd = function isOdd(_ref3) {
  var length = _ref3.length;
  return length % 2 === 1 && (0, _styledComponents.css)(_templateObject5(), changeColor);
};

var OptionStyle = _styledComponents.default.dd(_templateObject6(), (0, _polished.transparentize)(0.6, _palette.palette.colorThird), _Tools.Subtitle, changeColor, hasMoreThanOne, isOdd, changeColor);

exports.OptionStyle = OptionStyle;