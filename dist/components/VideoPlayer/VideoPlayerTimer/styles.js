"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _polished = require("polished");

var _Tools = require("../../../Styles/Tools");

var _palette = require("../../../Styles/Settings/Colors/palette");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  text-align: center;\n  color: var(--color-third);\n  background-color: ", ";\n  padding: calc(var(--gap-smallest) / 2);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var VideoPlayerTimerStyles = _styledComponents.default.p(_templateObject(), _Tools.Caption, (0, _polished.transparentize)(0.7, _palette.palette.colorSecond));

var _default = VideoPlayerTimerStyles;
exports.default = _default;