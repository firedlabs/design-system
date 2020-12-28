"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionImageStyle = exports.Image = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _palette = require("../../Styles/Settings/Colors/palette");

var _Tools = require("../../Styles/Tools");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  display: inline-block;\n  width: ", ";\n  height: ", ";\n  ", ";\n  background-color: var(--color-first);\n  ", ";\n  padding: var(--gap-small);\n\n  &:hover {\n    transform: scale(1.1);\n  }\n\n  ", ";\n  ", ";\n  ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      ", "\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    padding: 0;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  height: 100%;\n  object-fit: cover;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: ", ";\n    height: ", ";\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var optionsSize = {
  small: '15rem',
  medium: '22rem',
  big: '30rem'
};

var changeSize = function changeSize(_ref) {
  var size = _ref.size;
  return size && (0, _styledComponents.css)(_templateObject(), optionsSize[size], optionsSize[size]);
};

var changeColor = function changeColor(_ref2) {
  var backgroundColor = _ref2.backgroundColor;
  return backgroundColor && (0, _styledComponents.css)(_templateObject2(), _palette.palette[backgroundColor]);
};

var Image = _styledComponents.default.img(_templateObject3());

exports.Image = Image;

var clearPadding = function clearPadding(_ref3) {
  var isPadding = _ref3.isPadding;
  return !isPadding && (0, _styledComponents.css)(_templateObject4());
};

var changeBoxShadow = function changeBoxShadow(_ref4) {
  var boxShadow = _ref4.boxShadow;
  console.log(boxShadow);
  return boxShadow === 'small' && (0, _styledComponents.css)(_templateObject5(), _Tools.BoxShadow.small);
};

var ActionImageStyle = _styledComponents.default.a(_templateObject6(), optionsSize.small, optionsSize.small, _Tools.BoxShadow.medium, changeColor, clearPadding, changeSize, changeBoxShadow);

exports.ActionImageStyle = ActionImageStyle;