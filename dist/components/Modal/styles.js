"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalStyle = exports.Box = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

var _palette = require("../../Styles/Settings/Colors/palette");

var _Action = _interopRequireDefault(require("../Action"));

var _Tools = require("../../Styles/Tools");

var _styles = require("../Box/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 100;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  background-color: ", ";\n  border: 1rem solid var(--color-black-first);\n  height: 100vh;\n  padding: var(--gap-medium);\n  transform-origin: center center;\n  transform: scale(0);\n  opacity: 0;\n  transition: transform 400ms ease-in-out, opacity 300ms ease-in-out;\n\n  & > ", " {\n    ", ";\n    color: var(--color-third);\n    background-color: var(--color-black-fourth);\n    padding: var(--gap-smallest);\n\n    &:hover {\n      transform: translateY(-0.5rem) scale(1.1);\n    }\n  }\n\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    transform: scale(1);\n    opacity: 1;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: var(--gap-medium);\n  max-width: 900px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Box = (0, _styledComponents.default)(_styles.BoxStyles)(_templateObject());
exports.Box = Box;

var isOpen = function isOpen(_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject2());
};

var ModalStyle = _styledComponents.default.section(_templateObject3(), (0, _polished.transparentize)(0.05, _palette.palette.colorSecond), _Action.default, _Tools.Body2, isOpen);

exports.ModalStyle = ModalStyle;