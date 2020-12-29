"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListTagsStyle = exports.Item = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin: var(--gap-smallest) calc(var(--gap-smallest) / 2) 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Item = _styledComponents.default.li(_templateObject());

exports.Item = Item;

var ListTagsStyle = _styledComponents.default.ul(_templateObject2());

exports.ListTagsStyle = ListTagsStyle;