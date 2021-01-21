"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionCardStyles = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styles = require("../Box/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--color-third);\n  width: 280px;\n  height: 280px;\n  font-family: 'Press Start 2P', sans-serif;\n  font-size: 25px;\n  line-height: 30px;\n  text-align: center;\n\n  &:hover {\n    transform: scale(1.05);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ActionCardStyles = (0, _styledComponents.default)(_styles.BoxStyles)(_templateObject());
exports.ActionCardStyles = ActionCardStyles;