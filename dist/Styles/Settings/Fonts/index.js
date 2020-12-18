"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = require("styled-components");

var _FiraCode = _interopRequireDefault(require("./FiraCode"));

var _PressStart2P = _interopRequireDefault(require("./PressStart2P"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    ", ";\n    ", ";\n    ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Fonts = (0, _styledComponents.createGlobalStyle)(_templateObject(), _FiraCode.default.light, _FiraCode.default.medium, _PressStart2P.default.regular);
var _default = Fonts;
exports.default = _default;