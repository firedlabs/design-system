"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldsetStyle = exports.Wrapper = exports.Legend = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Tools = require("../../../Styles/Tools");

var _styles = require("../Checkbox/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  border: 0.5rem dashed var(--color-third);\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n\n  & > ", " {\n    margin: 0 var(--gap-small) var(--gap-medium);\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  font-weight: bold;\n  color: var(--color-third);\n  margin-left: 1rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Legend = _styledComponents.default.legend(_templateObject(), _Tools.Body1);

exports.Legend = Legend;

var Wrapper = _styledComponents.default.div(_templateObject2(), _styles.CheckboxStyle);

exports.Wrapper = Wrapper;

var FieldsetStyle = _styledComponents.default.fieldset(_templateObject3());

exports.FieldsetStyle = FieldsetStyle;