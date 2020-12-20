"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _index = require("../../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  width: 100%;\n  border: 1rem solid\n    ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Image = _styledComponents.default.img(_templateObject(), function (_ref) {
  var borderColor = _ref.borderColor;
  return borderColor ? _index.palette[borderColor] : 'var(--color-first)';
});

var _default = Image;
exports.default = _default;