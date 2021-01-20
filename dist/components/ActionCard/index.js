"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ActionCard(_ref) {
  var as = _ref.as,
      to = _ref.to,
      children = _ref.children,
      href = _ref.href;
  return /*#__PURE__*/_react.default.createElement(_styles.ActionCardStyles, {
    as: as,
    to: to,
    href: href
  }, children);
}

ActionCard.defaultProps = {
  href: '#',
  as: 'a',
  to: ''
};
ActionCard.propTypes = {
  children: _propTypes.default.string.isRequired,
  as: _propTypes.default.string,
  to: _propTypes.default.string,
  href: _propTypes.default.string
};
var _default = ActionCard;
exports.default = _default;