"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = exports.Video = exports.Source = exports.BigPlay = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _icons = _interopRequireDefault(require("../../assets/images/icons.png"));

var _Tools = require("../../Styles/Tools");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  background-color: var(--color-black-first);\n  ", ";\n\n  &:hover > ", " {\n    filter: grayscale(0);\n  }\n\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    box-sizing: border-box;\n    width: 60%;\n    ", ";\n    border: 0.5rem solid var(--color-third);\n    background-color: var(--color-black-second);\n\n    & > ", " {\n      width: auto;\n    }\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  min-width: 100%;\n  max-height: 100%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  width: 90px;\n  height: 90px;\n  background-color: var(--color-first);\n  filter: grayscale(1);\n  transition: opacity 100ms linear;\n  opacity: ", ";\n  transition: opacity 200ms linear;\n  ", "\n\n  &:after {\n    content: '';\n    background: url(", ") 0 0 no-repeat;\n    width: 16px;\n    height: 16px;\n    transform: scale(3);\n    image-rendering: crisp-edges;\n    image-rendering: pixelated;\n  }\n\n  &:hover {\n    ", ";\n    transform: scale(1.1);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BigPlay = _styledComponents.default.button(_templateObject(), function (_ref) {
  var active = _ref.active;
  return active ? '1' : '0';
}, _Tools.BoxShadow.small, _icons.default, _Tools.Cursor.hover);

exports.BigPlay = BigPlay;

var Source = _styledComponents.default.source(_templateObject2());

exports.Source = Source;

var Video = _styledComponents.default.video(_templateObject3());

exports.Video = Video;

var hasBox = function hasBox(_ref2) {
  var box = _ref2.box;
  return box && (0, _styledComponents.css)(_templateObject4(), _Tools.BoxShadow.medium, Video);
};

var Wrapper = _styledComponents.default.figure(_templateObject5(), function (_ref3) {
  var showCursor = _ref3.showCursor;
  return !showCursor && 'cursor: none;';
}, BigPlay, hasBox);

exports.Wrapper = Wrapper;