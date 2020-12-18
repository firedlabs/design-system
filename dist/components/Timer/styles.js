"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimerStyles = exports.Label = exports.Time = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Tools = require("../../Styles/Tools");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  text-transform: uppercase;\n  color: var(--color-black-first);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--color-black-first);\n  ", ";\n  padding: var(--gap-medium) var(--gap-smallest);\n  background-color: var(--color-third);\n  ", ";\n  margin-bottom: calc(var(--gap-smallest) / 2);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Time = _styledComponents.default.dd(_templateObject(), _Tools.Subtitle, _Tools.BoxShadow.small);

exports.Time = Time;

var Label = _styledComponents.default.dt(_templateObject2(), _Tools.Body2);

exports.Label = Label;

var TimerStyles = _styledComponents.default.dl(_templateObject3());

exports.TimerStyles = TimerStyles;