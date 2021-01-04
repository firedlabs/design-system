"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxStyles = exports.Image = exports.Content = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _palette = require("../../Styles/Settings/Colors/palette");

var _Tools = require("../../Styles/Tools");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  width: 100%;\n  ", ";\n  border: 0.5rem solid var(--color-third);\n  padding: var(--gap-medium);\n  background-color: var(--color-black-second);\n\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    border-color: ", ";\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    background-color: var(--color-black-fourth);\n\n    & > ", " {\n      color: var(--color-black-first);\n\n      & > a {\n        color: var(--color-third);\n      }\n    }\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  color: var(--color-third);\n  ", ";\n\n  & > strong {\n    font-weight: bold;\n  }\n\n  & > a {\n    color: var(--color-first);\n    font-weight: bold;\n    text-underline-offset: var(--gap-smallest);\n    text-decoration-thickness: 3px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n  "]);

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

var changeColor = function changeColor(_ref2) {
  var color = _ref2.color;
  return color && (0, _styledComponents.css)(_templateObject2(), _palette.palette[color]);
};

var Content = _styledComponents.default.p(_templateObject3(), _Tools.Body1, changeColor);

exports.Content = Content;

var hasLight = function hasLight(_ref3) {
  var light = _ref3.light;
  return light && (0, _styledComponents.css)(_templateObject4(), Content);
};

var changeBorderColor = function changeBorderColor(_ref4) {
  var borderColor = _ref4.borderColor;
  return borderColor && (0, _styledComponents.css)(_templateObject5(), _palette.palette[borderColor]);
};

var changeBackgroundColor = function changeBackgroundColor(_ref5) {
  var backgroundColor = _ref5.backgroundColor;
  return backgroundColor && (0, _styledComponents.css)(_templateObject6(), _palette.palette[backgroundColor]);
};

var Image = _styledComponents.default.img(_templateObject7());

exports.Image = Image;

var BoxStyles = _styledComponents.default.article(_templateObject8(), _Tools.BoxShadow.medium, hasImage, changeBorderColor, changeBackgroundColor, hasLight);

exports.BoxStyles = BoxStyles;