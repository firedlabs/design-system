"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Tools = require("../../Styles/Tools");

var _styles = require("../ContentDay/styles");

var _styles2 = _interopRequireDefault(require("../ListContentDay/styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n\n  & > ", " {\n    @media (max-width: 1290px) {\n      flex-direction: column;\n\n      & > ", " {\n        width: 100%;\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject(), _Tools.Container, _styles2.default, _styles.ContentDayStyle);

var _default = Container;
exports.default = _default;