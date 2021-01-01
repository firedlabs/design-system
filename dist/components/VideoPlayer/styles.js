"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = exports.Video = exports.Source = exports.BigPlay = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _icons = _interopRequireDefault(require("../../assets/images/icons.png"));

var _Tools = require("../../Styles/Tools");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  background-color: var(--color-black-first);\n  ", ";\n\n  &:hover > ", " {\n    filter: grayscale(0);\n  }\n"]);

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

var Wrapper = _styledComponents.default.figure(_templateObject4(), function (_ref2) {
  var showCursor = _ref2.showCursor;
  return !showCursor && 'cursor: none;';
}, BigPlay);

exports.Wrapper = Wrapper;