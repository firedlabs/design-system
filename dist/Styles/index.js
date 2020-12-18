"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Styles = void 0;

var _react = _interopRequireDefault(require("react"));

var _Settings = _interopRequireDefault(require("./Settings"));

var _Generic = _interopRequireDefault(require("./Generic"));

var _Elements = _interopRequireDefault(require("./Elements"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Styles = function Styles() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Settings.default, null), /*#__PURE__*/_react.default.createElement(_Generic.default, null), /*#__PURE__*/_react.default.createElement(_Elements.default, null));
};

exports.Styles = Styles;