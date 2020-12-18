"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CountdownStyles = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styles = require("../Timer/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  & > ", ":not(:last-child) {\n    margin-right: var(--gap-big);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CountdownStyles = _styledComponents.default.div(_templateObject(), _styles.TimerStyles);

exports.CountdownStyles = CountdownStyles;