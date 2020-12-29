"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Tools = require("../../Styles/Tools");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  padding: calc(var(--gap-smallest) / 2);\n  background-color: var(--color-third);\n  color: var(--color-black-first);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Tag = _styledComponents.default.span(_templateObject(), _Tools.Caption);

Tag.defaultProps = {
  backgroundColor: 'colorThird',
  color: 'colorBlackFirst'
};
Tag.propTypes = {
  children: _propTypes.default.string.isRequired,
  backgroundColor: _propTypes.default.string,
  color: _propTypes.default.string
};
var _default = Tag;
exports.default = _default;