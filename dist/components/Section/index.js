"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _index = require("../../index");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  width: 100%;\n  background-color: ", ";\n  border-bottom: 1rem solid\n    ", ";\n  padding: var(--gap-small) var(--gap-medium);\n\n  ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    padding-top: var(--gap-biggest);\n    padding-bottom: var(--gap-biggest);\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    padding-top: var(--gap-big);\n    padding-bottom: var(--gap-big);\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    padding-top: var(--gap-medium);\n    padding-bottom: var(--gap-medium);\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var hasMedium = function hasMedium(_ref) {
  var medium = _ref.medium;
  return medium && (0, _styledComponents.css)(_templateObject());
};

var hasBig = function hasBig(_ref2) {
  var big = _ref2.big;
  return big && (0, _styledComponents.css)(_templateObject2());
};

var hasBiggest = function hasBiggest(_ref3) {
  var biggest = _ref3.biggest;
  return biggest && (0, _styledComponents.css)(_templateObject3());
};

var Section = _styledComponents.default.section(_templateObject4(), function (_ref4) {
  var backgroundColor = _ref4.backgroundColor;
  return backgroundColor ? _index.palette[backgroundColor] : 'var(--color-first)';
}, function (_ref5) {
  var borderColor = _ref5.borderColor;
  return borderColor ? _index.palette[borderColor] : 'var(--color-black-first)';
}, hasMedium, hasBig, hasBiggest);

var _default = Section;
exports.default = _default;