"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _index = require("../../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  width: 100%;\n  background-color: ", ";\n  border-bottom: 10px solid\n    ", ";\n  padding: var(--gap-biggest) var(--gap-medium);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Section = _styledComponents.default.section(_templateObject(), function (_ref) {
  var backgroundColor = _ref.backgroundColor;
  return backgroundColor ? _index.palette[backgroundColor] : 'var(--color-first)';
}, function (_ref2) {
  var borderColor = _ref2.borderColor;
  return borderColor ? _index.palette[borderColor] : 'var(--color-black-first)';
});

var _default = Section;
exports.default = _default;