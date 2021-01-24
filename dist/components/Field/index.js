"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Email = _interopRequireDefault(require("./Email"));

var _Text = _interopRequireDefault(require("./Text"));

var _Textarea = _interopRequireDefault(require("./Textarea"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Field = {
  Email: _Email.default,
  Text: _Text.default,
  Textarea: _Textarea.default
};
var _default = Field;
exports.default = _default;