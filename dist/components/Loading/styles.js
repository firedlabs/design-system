"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingStyle = exports.Square = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Tools = require("../../Styles/Tools");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  --wh: 2rem;\n  --duration: 1000ms;\n\n  position: absolute;\n  background-color: var(--color-third);\n  opacity: ", ";\n\n  &:before,\n  &:after {\n    content: '';\n    display: block;\n    width: var(--wh);\n    height: var(--wh);\n    background-color: inherit;\n    position: absolute;\n    top: 0;\n    left: 0;\n    ", ";\n  }\n\n  &:before {\n    animation: ", " var(--duration) cubic-bezier(0, 0.5, 0.5, 1) infinite;\n    left: calc(var(--wh) * -1.5);\n  }\n\n  &:after {\n    animation: ", " var(--duration) cubic-bezier(0, 0.5, 0.5, 1) infinite;\n    animation-delay: calc(var(--duration) * -0.5);\n    left: calc(var(--wh) * 1.5);\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  background-color: inherit;\n  width: var(--wh);\n  height: var(--wh);\n  animation: ", " var(--duration) cubic-bezier(0, 0.5, 0.5, 1) infinite;\n  animation-delay: calc(var(--duration) * -0.25);\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-2rem);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var jump = (0, _styledComponents.keyframes)(_templateObject());

var Square = _styledComponents.default.div(_templateObject2(), jump, _Tools.BoxShadow.small);

exports.Square = Square;

var LoadingStyle = _styledComponents.default.div(_templateObject3(), function (_ref) {
  var active = _ref.active;
  return active ? '1' : '0';
}, _Tools.BoxShadow.small, jump, jump);

exports.LoadingStyle = LoadingStyle;