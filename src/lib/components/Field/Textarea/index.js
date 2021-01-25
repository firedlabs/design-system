import React from 'react'
import PropTypes from 'prop-types'
import { Content, Label } from '../styles'
import { TextareaStyles } from './styles'

function Textarea({ name, label, placeholder, readOnly, register }) {
  return (
    <Label>
      <Content>{label}</Content>
      <TextareaStyles
        name={name}
        placeholder={placeholder}
        readOnly={readOnly}
        ref={register()}
      />
    </Label>
  )
}

Textarea.defaultProps = {
  name: '',
  label: '',
  placeholder: '',
  readOnly: false,
  register: () => {}
}

Textarea.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  register: PropTypes.func
}

export default Textarea
