"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fontFace = _interopRequireDefault(require("../fontFace"));

var _FiraCodeAssets = _interopRequireDefault(require("./FiraCodeAssets"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FiraCode = {
  light: (0, _fontFace.default)('Fira Code', _FiraCodeAssets.default.light, 300),
  regular: (0, _fontFace.default)('Fira Code', _FiraCodeAssets.default.regular, 400),
  medium: (0, _fontFace.default)('Fira Code', _FiraCodeAssets.default.medium, 500),
  semiBold: (0, _fontFace.default)('Fira Code', _FiraCodeAssets.default.semiBold, 600),
  bold: (0, _fontFace.default)('Fira Code', _FiraCodeAssets.default.bold, 700)
};
var _default = FiraCode;
exports.default = _default;