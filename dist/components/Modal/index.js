"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Heading = _interopRequireDefault(require("../Heading"));

var _Action = _interopRequireDefault(require("../Action"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Modal(_ref) {
  var title = _ref.title,
      children = _ref.children,
      active = _ref.active,
      actionClose = _ref.actionClose;

  var handleClick = function handleClick(event) {
    if (event.target.tagName === 'SECTION') {
      actionClose();
    }
  };

  return /*#__PURE__*/_react.default.createElement(_styles.ModalStyle, {
    active: active,
    onClick: handleClick
  }, /*#__PURE__*/_react.default.createElement(_Heading.default, null, title), /*#__PURE__*/_react.default.createElement(_styles.Box, null, children), /*#__PURE__*/_react.default.createElement(_Action.default, {
    as: "button",
    onClick: actionClose
  }, "Fechar"));
}

Modal.propTypes = {
  title: _propTypes.default.string.isRequired,
  children: _propTypes.default.element.isRequired,
  active: _propTypes.default.bool.isRequired,
  actionClose: _propTypes.default.func.isRequired
};
var _default = Modal;
exports.default = _default;