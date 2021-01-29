"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ControlsStyle = exports.Right = exports.Left = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

var _palette = require("../../../Styles/Settings/Colors/palette");

var _Tools = require("../../../Styles/Tools");

var _styles = require("../Playlist/styles");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  --height-controls: 50px;\n  display: flex;\n  box-sizing: border-box;\n  padding-left: var(--gap-small);\n  padding-right: var(--gap-small);\n  justify-content: space-between;\n  align-items: center;\n  position: absolute;\n  bottom: 0;\n  z-index: 20;\n  width: 100%;\n  height: var(--height-controls);\n  background-color: ", ";\n  transition: transform 100ms linear;\n  transform: ", ";\n\n  &:hover,\n  &:focus {\n    transform: translate(0);\n    ", ";\n  }\n\n  & ", " {\n    height: calc(100vh - var(--height-controls));\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  position: relative;\n  z-index: 2;\n\n  & > *:not(:last-child) {\n    margin-right: var(--gap-medium);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var wrappers = (0, _styledComponents.css)(_templateObject());

var Left = _styledComponents.default.div(_templateObject2(), wrappers);

exports.Left = Left;

var Right = _styledComponents.default.div(_templateObject3(), wrappers);

exports.Right = Right;

var ControlsStyle = _styledComponents.default.menu(_templateObject4(), (0, _polished.transparentize)(0.4, _palette.palette.colorSecond), function (_ref) {
  var show = _ref.show;
  return show ? 'translateY(0)' : 'translateY(100%)';
}, _Tools.Cursor.standard, _styles.WrapperLesson);

exports.ControlsStyle = ControlsStyle;