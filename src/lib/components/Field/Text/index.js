import React from 'react'
import PropTypes from 'prop-types'
import { Label, Content, Input } from '../styles'

function Text({ name, type, label, placeholder, readOnly, register }) {
  return (
    <Label>
      <Content>{label}</Content>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        readOnly={readOnly}
        {...register(name)}
      />
    </Label>
  )
}

Text.defaultProps = {
  name: '',
  type: 'text',
  label: '',
  placeholder: '',
  readOnly: false,
  register: () => {}
}

Text.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  register: PropTypes.func
}

export default Text
