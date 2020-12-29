"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _palette = require("../../Styles/Settings/Colors/palette");

var _Tools = require("../../Styles/Tools");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  box-sizing: border-box;\n  ", "\n  border: 0.5rem solid var(--color-second);\n  background-color: var(--color-third);\n  width: 100%;\n  padding: calc(var(--gap-smallest) / 2) var(--gap-small);\n  position: relative;\n  overflow: hidden;\n  ", ";\n\n  ", ";\n  ", ";\n  ", ";\n\n  &:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    background-color: var(--color-success);\n    width: 100%;\n    height: 100%;\n    transform-origin: left center;\n    ", ";\n    ", ";\n  }\n\n  &:after {\n    content: '", "';\n    position: absolute;\n    z-index: 1;\n    ", ";\n  }\n"]);

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
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    border-color: ", ";\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    ", "\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  transform: scaleX(", ");\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var sizeBar = (0, _styledComponents.css)(_templateObject(), function (_ref) {
  var currentPercentage = _ref.currentPercentage;
  return currentPercentage / 100;
});

var changeBoxShadow = function changeBoxShadow(_ref2) {
  var boxShadow = _ref2.boxShadow;
  return boxShadow === 'small' && (0, _styledComponents.css)(_templateObject2(), _Tools.BoxShadow.small);
};

var changeBorderColor = function changeBorderColor(_ref3) {
  var borderColor = _ref3.borderColor;
  return borderColor && (0, _styledComponents.css)(_templateObject3(), _palette.palette[borderColor]);
};

var changeColor = function changeColor(_ref4) {
  var color = _ref4.color;
  return color && (0, _styledComponents.css)(_templateObject4(), _palette.palette[color]);
};

var changeBackgroundColor = function changeBackgroundColor(_ref5) {
  var backgroundColor = _ref5.backgroundColor;
  return backgroundColor && (0, _styledComponents.css)(_templateObject5(), _palette.palette[backgroundColor]);
};

var changeBarColor = function changeBarColor(_ref6) {
  var barColor = _ref6.barColor;
  return barColor && (0, _styledComponents.css)(_templateObject6(), _palette.palette[barColor]);
};

var ProgressBarStyle = _styledComponents.default.div(_templateObject7(), _Tools.Body2, _Tools.BoxShadow.medium, changeBoxShadow, changeBorderColor, changeBackgroundColor, sizeBar, changeBarColor, function (_ref7) {
  var currentPercentage = _ref7.currentPercentage;
  return currentPercentage + '%';
}, changeColor);

var _default = ProgressBarStyle;
exports.default = _default;