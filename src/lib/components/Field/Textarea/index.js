import React from 'react'
import PropTypes from 'prop-types'
import { Content, Label } from '../styles'
import { TextareaStyles } from './styles'

function Textarea({ value, label, placeholder, readOnly, onChange }) {
  return (
    <Label>
      <Content>{label}</Content>
      <TextareaStyles
        value={value}
        placeholder={placeholder}
        readOnly={readOnly}
      >
        {value}
      </TextareaStyles>
    </Label>
  )
}

Textarea.defaultProps = {
  value: '',
  label: '',
  placeholder: '',
  readOnly: false,
  onChange: () => {}
}

Textarea.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func
}

export default Textarea
