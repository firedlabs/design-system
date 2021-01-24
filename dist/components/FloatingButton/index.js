"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Tools = require("../../Styles/Tools");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  font-weight: bold;\n  font-size: 4rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--color-first);\n  color: var(--color-third);\n  min-height: 50px;\n  min-width: 50px;\n  ", ";\n  position: fixed;\n  bottom: var(--gap-biggest);\n  right: var(--gap-biggest);\n\n  &:hover {\n    transform: scale(1.2);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FloatingButton = _styledComponents.default.button(_templateObject(), _Tools.Body1, _Tools.BoxShadow.small);

var _default = FloatingButton;
exports.default = _default;