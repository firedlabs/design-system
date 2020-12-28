"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Base = _interopRequireDefault(require("./Base"));

var _Form = _interopRequireDefault(require("./Form"));

var _Text = _interopRequireDefault(require("./Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Elements = function Elements() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Base.default, null), /*#__PURE__*/_react.default.createElement(_Form.default, null), /*#__PURE__*/_react.default.createElement(_Text.default, null));
};

var _default = Elements;
exports.default = _default;