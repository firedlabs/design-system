"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingsStyle = exports.WrapperIcon = exports.Icon = exports.Menu = exports.Velocity = exports.Action = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Tools = require("../../../Styles/Tools");

var _Box = _interopRequireDefault(require("../../Box"));

var _IconPlayer = require("../IconPlayer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  opacity: 1;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  opacity: ", ";\n  top: 0;\n  right: 0;\n  padding: 0 var(--gap-smallest);\n  transition: transform 200ms ease-in-out, opacity 150ms ease-in-out;\n  transform: translateY(calc((100% + var(--gap-big)) * -1))\n    translateX(", ");\n\n  &:hover {\n    transform: translateY(calc((100% + var(--gap-big)) * -1)) translateX(0);\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  opacity: ", ";\n  transform: translateY(calc((100% + var(--gap-big)) * -1))\n    translateX(", ");\n  padding: 0 var(--gap-smallest);\n\n  &:hover {\n    transform: translateY(calc((100% + var(--gap-big)) * -1)) translateX(0);\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n\n  padding: var(--gap-smallest) 0;\n  color: var(--color-third);\n  color: ", ";\n  transition: transform 100ms linear;\n\n  &:hover {\n    color: var(--color-warning);\n    transform: scale(1.08);\n    ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Action = _styledComponents.default.span(_templateObject(), function (_ref) {
  var active = _ref.active;
  return active && 'var(--color-warning)';
}, _Tools.Cursor.hover);

exports.Action = Action;
var Velocity = (0, _styledComponents.default)(_Box.default)(_templateObject2(), function (_ref2) {
  var showVelocity = _ref2.showVelocity;
  return showVelocity ? '1' : '0';
}, function (_ref3) {
  var showVelocity = _ref3.showVelocity;
  return showVelocity ? '0' : '120%';
});
exports.Velocity = Velocity;
var Menu = (0, _styledComponents.default)(_Box.default).attrs({
  as: 'menu'
})(_templateObject3(), function (_ref4) {
  var showMenu = _ref4.showMenu;
  return showMenu ? '1' : '0';
}, function (_ref5) {
  var showMenu = _ref5.showMenu;
  return showMenu ? '0' : '120%';
});
exports.Menu = Menu;
var Icon = (0, _styledComponents.default)(_IconPlayer.IconPlayer).attrs({
  icon: 'settings'
})(_templateObject4());
exports.Icon = Icon;
var WrapperIcon = (0, _styledComponents.default)(_IconPlayer.IconPlayerWrapper)(_templateObject5());
exports.WrapperIcon = WrapperIcon;

var SettingsStyle = _styledComponents.default.div(_templateObject6());

exports.SettingsStyle = SettingsStyle;