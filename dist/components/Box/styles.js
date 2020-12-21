"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxStyles = exports.Image = exports.Content = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Tools = require("../../Styles/Tools");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  width: 100%;\n  ", ";\n  border: 5px solid var(--color-third);\n  padding: var(--gap-medium);\n  background-color: var(--color-black-second);\n\n  ", ";\n  ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    background-color: var(--color-black-fourth);\n\n    & > ", " {\n      color: var(--color-black-first);\n\n      & > a {\n        color: var(--color-third);\n      }\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  color: var(--color-third);\n\n  & > strong {\n    font-weight: bold;\n  }\n\n  & > a {\n    color: var(--color-first);\n    font-weight: bold;\n    text-underline-offset: var(--gap-smallest);\n    text-decoration-thickness: 3px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: inline-flex;\n    padding: 0;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var hasImage = function hasImage(_ref) {
  var image = _ref.image;
  return image && (0, _styledComponents.css)(_templateObject());
};

var Content = _styledComponents.default.p(_templateObject2(), _Tools.Body1);

exports.Content = Content;

var hasLight = function hasLight(_ref2) {
  var light = _ref2.light;
  return light && (0, _styledComponents.css)(_templateObject3(), Content);
};

var Image = _styledComponents.default.img(_templateObject4());

exports.Image = Image;

var BoxStyles = _styledComponents.default.article(_templateObject5(), _Tools.BoxShadow.medium, hasLight, hasImage);

exports.BoxStyles = BoxStyles;