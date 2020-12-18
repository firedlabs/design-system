"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileStyle = exports.Nav = exports.Action = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _index = require("../../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  & > ", " {\n    color: var(--color-first);\n  }\n\n  & > ", ", & > ", " {\n    margin-bottom: var(--gap-smallest);\n  }\n\n  & ", " {\n    width: 60px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  &:not(:last-child) {\n    margin-right: var(--gap-big);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Action = _styledComponents.default.a(_templateObject());

exports.Action = Action;

var Nav = _styledComponents.default.nav(_templateObject2());

exports.Nav = Nav;

var ProfileStyle = _styledComponents.default.article(_templateObject3(), _index.Title, _index.Title, _index.Image, _index.Icons);

exports.ProfileStyle = ProfileStyle;