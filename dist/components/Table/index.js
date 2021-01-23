"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Image = _interopRequireDefault(require("../Image"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function Table(_ref) {
  var columns = _ref.columns,
      data = _ref.data;

  var isProfile = function isProfile(dataParam) {
    return /\.png|\.jpg|\.jpeg$/.test(dataParam) && /*#__PURE__*/_react.default.createElement(_Image.default, {
      src: dataParam,
      alt: "Avatar do usu\xE1rio"
    });
  };

  var isLink = function isLink(dataParam) {
    return _typeof(dataParam) === 'object' && (dataParam.href || dataParam.to) && /*#__PURE__*/_react.default.createElement(_styles.TableLink, dataParam, dataParam.content);
  };

  var isCallback = function isCallback(dataParam) {
    return _typeof(dataParam) === 'object' && typeof dataParam.callback === 'function' && /*#__PURE__*/_react.default.createElement(_styles.TableLink, {
      as: "span",
      onClick: dataParam.callback
    }, dataParam.content);
  };

  return /*#__PURE__*/_react.default.createElement(_styles.TableStyle, null, /*#__PURE__*/_react.default.createElement(_styles.TableHead, null, /*#__PURE__*/_react.default.createElement(_styles.TableRow, null, columns.map(function (column) {
    return /*#__PURE__*/_react.default.createElement(_styles.Th, {
      key: column
    }, column);
  }))), /*#__PURE__*/_react.default.createElement(_styles.TableBody, null, data.map(function (row) {
    return /*#__PURE__*/_react.default.createElement(_styles.TableRow, {
      key: row
    }, row.map(function (dataParam) {
      return /*#__PURE__*/_react.default.createElement(_styles.TableData, {
        key: dataParam
      }, isProfile(dataParam) || isLink(dataParam) || isCallback(dataParam) || dataParam);
    }));
  })));
}

Table.propTypes = {
  columns: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,
  data: _propTypes.default.arrayOf([_propTypes.default.string, _propTypes.default.shape({
    content: _propTypes.default.string.isRequired,
    link: _propTypes.default.string,
    to: _propTypes.default.string,
    as: _propTypes.default.string
  }), _propTypes.default.shape({
    callback: _propTypes.default.func.isRequired,
    content: _propTypes.default.string.isRequired
  })]).isRequired
};
var _default = Table;
exports.default = _default;