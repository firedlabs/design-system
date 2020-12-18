"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Tools = require("../../Styles/Tools");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  ", ";\n  width: 600px;\n  height: 420px;\n  background-color: ", ";\n  border: 5px solid var(--color-third);\n  padding: var(--gap-medium);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Box = _styledComponents.default.article(_templateObject(), _Tools.BoxShadow.medium, function (_ref) {
  var light = _ref.light;
  return light ? 'var(--color-black-fourth)' : 'var(--color-black-second)';
});

var _default = Box;
exports.default = _default;