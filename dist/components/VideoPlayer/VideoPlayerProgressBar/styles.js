"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoPlayerProgressBarStyle = exports.InputRange = exports.Bar = exports.Buffer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Tools = require("../../../Styles/Tools");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 0.6rem;\n  transform-origin: center center;\n  transform: translateY(-100%);\n  background-color: var(--color-second);\n\n  &:hover,\n  &:focus {\n    ", ";\n    transform: scaleY(2) translateY(-50%);\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  flex-shrink: 0;\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 3;\n  opacity: 0;\n  transform: translateY(-42%);\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  z-index: 2;\n  background-color: var(--color-first);\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  z-index: 1;\n  background-color: var(--color-third);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  transform-origin: left center;\n  transform: translateX(", ");\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GenericBar = (0, _styledComponents.css)(_templateObject(), function (_ref) {
  var value = _ref.value;
  return "".concat(value, "%");
});

var Buffer = _styledComponents.default.span(_templateObject2(), GenericBar);

exports.Buffer = Buffer;

var Bar = _styledComponents.default.label.attrs({
  htmlFor: 'progress'
})(_templateObject3(), GenericBar);

exports.Bar = Bar;

var InputRange = _styledComponents.default.input.attrs({
  type: 'range',
  step: 0.1,
  id: 'progress'
})(_templateObject4(), _Tools.Cursor.hover);

exports.InputRange = InputRange;

var VideoPlayerProgressBarStyle = _styledComponents.default.div(_templateObject5(), _Tools.Cursor.hover);

exports.VideoPlayerProgressBarStyle = VideoPlayerProgressBarStyle;