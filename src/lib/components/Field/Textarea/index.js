import React from 'react'
import PropTypes from 'prop-types'
import { Content, Label } from '../styles'
import { TextareaStyles } from './styles'

function Textarea({
  value,
  name,
  label,
  placeholder,
  readOnly,
  onChange,
  register
}) {
  return (
    <Label>
      <Content>{label}</Content>
      <TextareaStyles
        name={name}
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
  name: '',
  label: '',
  placeholder: '',
  readOnly: false,
  onChange: () => {},
  register: () => {}
}

Textarea.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
  register: PropTypes.func
}

export default Textarea
