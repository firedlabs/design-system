"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _index = require("../../Styles/Tools/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: var(--color-first);\n  ", ";\n  padding: var(--gap-medium);\n  color: var(--color-third);\n  ", ";\n  cursor: pointer;\n\n  &:hover {\n    transform: translateY(calc(var(--gap-smallest) * -1)) scale(1.05);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = _styledComponents.default.button(_templateObject(), _index.Title, _index.BoxShadow.small);

Button.defaultProps = {
  children: 'Enviar'
};
Button.propTypes = {
  children: _propTypes.default.string
};
var _default = Button;
exports.default = _default;