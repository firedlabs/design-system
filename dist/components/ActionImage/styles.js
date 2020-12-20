"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Action = exports.Image = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Tools = require("../../Styles/Tools");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  cursor: pointer;\n  width: 20rem;\n  ", ";\n\n  &:hover {\n    transform: scale(1.1);\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Image = _styledComponents.default.img(_templateObject());

exports.Image = Image;

var Action = _styledComponents.default.a(_templateObject2(), _Tools.BoxShadow.medium);

exports.Action = Action;