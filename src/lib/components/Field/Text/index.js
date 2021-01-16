import React from 'react'
import PropTypes from 'prop-types'
import { Label, Content, Input } from '../styles'

function Text({ value, type, label, placeholder, readOnly }) {
  return (
    <Label>
      <Content>{label}</Content>
      <Input
        value={value}
        type={type}
        placeholder={placeholder}
        readOnly={readOnly}
      />
    </Label>
  )
}

Text.defaultProps = {
  value: '',
  type: 'text',
  label: '',
  placeholder: '',
  readOnly: false
}

Text.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool
}

export default Text
