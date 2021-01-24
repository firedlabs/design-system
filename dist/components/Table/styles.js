"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableStyle = exports.TableHead = exports.TableBody = exports.TableRow = exports.Th = exports.TableData = exports.TableLink = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Tools = require("../../Styles/Tools");

var _styles = require("../Box/styles");

var _Image = _interopRequireDefault(require("../Image"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  width: 90vw;\n  margin: 0 auto var(--gap-big);\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  color: var(--color-warning);\n  font-weight: bold;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  text-align: center;\n  color: var(--color-third);\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  &:not(:last-child) {\n    border-bottom: 1px solid var(--color-third);\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  padding: var(--gap-small) 0;\n  border-bottom: 4px solid var(--color-first);\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: var(--gap-smallest) 0;\n  vertical-align: middle;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  max-width: 150px;\n\n  & > ", " {\n    width: 40px;\n    height: 40px;\n    border-width: 2px;\n    vertical-align: middle;\n\n    &:hover {\n      border-color: var(--color-warning);\n      ", ";\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: var(--color-first);\n  text-decoration: underline;\n\n  &:hover {\n    ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TableLink = _styledComponents.default.a(_templateObject(), _Tools.Cursor.hover);

exports.TableLink = TableLink;

var TableData = _styledComponents.default.td(_templateObject2(), _Image.default, _Tools.Cursor.hover);

exports.TableData = TableData;

var Th = _styledComponents.default.th(_templateObject3());

exports.Th = Th;

var TableRow = _styledComponents.default.tr(_templateObject4());

exports.TableRow = TableRow;

var TableBody = _styledComponents.default.tbody(_templateObject5(), _Tools.Body1);

exports.TableBody = TableBody;

var TableHead = _styledComponents.default.thead(_templateObject6(), _Tools.Subtitle);

exports.TableHead = TableHead;
var TableStyle = (0, _styledComponents.default)(_styles.BoxStyles).attrs({
  as: 'table'
})(_templateObject7());
exports.TableStyle = TableStyle;