"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectStyle = exports.Option = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Tools = require("../../../Styles/Tools");

var _styles = require("../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n\n  &:read-only {\n    background-color: var(--color-third);\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Option = _styledComponents.default.option(_templateObject());

exports.Option = Option;
var SelectStyle = (0, _styledComponents.default)(_styles.Input).attrs({
  as: 'select'
})(_templateObject2(), _Tools.Cursor.hover);
exports.SelectStyle = SelectStyle;