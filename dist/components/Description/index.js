"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Tools = require("../../Styles/Tools");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  color: var(--color-third);\n  ", ";\n\n  & > strong {\n    font-weight: bold;\n  }\n\n  & > a {\n    ", "\n  }\n\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    margin-bottom: var(--gap-biggest);\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    margin-bottom: var(--gap-big);\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    margin-bottom: var(--gap-medium);\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    margin-bottom: var(--gap-small);\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    color: var(--color-black-first);\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var hasDark = function hasDark(_ref) {
  var dark = _ref.dark;
  return dark && (0, _styledComponents.css)(_templateObject());
};

var hasSmall = function hasSmall(_ref2) {
  var small = _ref2.small;
  return small && (0, _styledComponents.css)(_templateObject2());
};

var hasMedium = function hasMedium(_ref3) {
  var medium = _ref3.medium;
  return medium && (0, _styledComponents.css)(_templateObject3());
};

var hasBig = function hasBig(_ref4) {
  var big = _ref4.big;
  return big && (0, _styledComponents.css)(_templateObject4());
};

var hasBiggest = function hasBiggest(_ref5) {
  var biggest = _ref5.biggest;
  return biggest && (0, _styledComponents.css)(_templateObject5());
};

var Description = _styledComponents.default.p(_templateObject6(), _Tools.Body1, hasDark, _Tools.Link, hasSmall, hasMedium, hasBig, hasBiggest);

var _default = Description;
exports.default = _default;