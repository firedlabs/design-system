"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextareaStyles = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styles = require("../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 300px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TextareaStyles = (0, _styledComponents.default)(_styles.Input).attrs({
  as: 'textarea'
})(_templateObject());
exports.TextareaStyles = TextareaStyles;