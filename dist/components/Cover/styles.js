"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CoverStyle = exports.Title = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Tools = require("../../Styles/Tools");

var _styles = _interopRequireDefault(require("../ProgressBar/styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n\n  & > ", " {\n    border-top: none;\n    width: 68.5%;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  color: var(--color-third);\n  margin: var(--gap-small) calc(var(--gap-smallest) / 2) 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Title = _styledComponents.default.h3(_templateObject(), _Tools.Body2);

exports.Title = Title;

var CoverStyle = _styledComponents.default.article(_templateObject2(), _styles.default);

exports.CoverStyle = CoverStyle;