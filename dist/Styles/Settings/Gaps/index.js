'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

const _styledComponents = require('styled-components')

function _templateObject() {
  const data = _taggedTemplateLiteral([
    '\n  :root {\n    --gap-smallest: 1rem;\n    --gap-small: 1.5rem;\n    --gap-medium: 2rem;\n    --gap-big: 4rem;\n    --gap-biggest: 8rem;  \n  }\n'
  ])

  _templateObject = function _templateObject() {
    return data
  }

  return data
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0)
  }
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })
  )
}

const Gaps = (0, _styledComponents.createGlobalStyle)(_templateObject())
const _default = Gaps
exports.default = _default
