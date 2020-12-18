"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fontFace = _interopRequireDefault(require("../fontFace"));

var _PressStart2PAssets = _interopRequireDefault(require("./PressStart2PAssets"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PressStart2P = {
  regular: (0, _fontFace.default)('Press Start 2P', _PressStart2PAssets.default.regular, 400)
};
var _default = PressStart2P;
exports.default = _default;