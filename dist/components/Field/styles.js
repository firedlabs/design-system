"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = exports.Input = exports.Content = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Tools = require("../../Styles/Tools");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  display: flex;\n  flex-direction: column;\n  margin-bottom: var(--gap-small);\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  background-color: var(--color-third);\n  color: var(--color-black-first);\n  padding: var(--gap-small);\n  border: none;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: var(--gap-smallest);\n  color: var(--color-third);\n  font-weight: bold;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Content = _styledComponents.default.span(_templateObject());

exports.Content = Content;

var Input = _styledComponents.default.input(_templateObject2(), _Tools.Body1);

exports.Input = Input;

var Label = _styledComponents.default.label(_templateObject3(), _Tools.Body1);

exports.Label = Label;