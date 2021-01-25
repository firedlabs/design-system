import React from 'react'
import PropTypes from 'prop-types'
import { Content, Label } from '../styles'
import { TextareaStyles } from './styles'

function Textarea({ value, label, placeholder, readOnly, onChange, register }) {
  return (
    <Label>
      <Content>{label}</Content>
      <TextareaStyles
        value={value}
        placeholder={placeholder}
        readOnly={readOnly}
        onChange={onChange}
        ref={register}
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
  onChange: () => {},
  register: () => {}
}

Textarea.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
  register: PropTypes.func
}

export default Textarea
