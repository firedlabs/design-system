import React from 'react'
import PropTypes from 'prop-types'
import { Label, Content, Input } from '../styles'

function Text({
  value,
  name,
  type,
  label,
  placeholder,
  readOnly,
  onChange,
  register
}) {
  return (
    <Label>
      <Content>{label}</Content>
      <Input
        value={value}
        name={name}
        type={type}
        placeholder={placeholder}
        readOnly={readOnly}
        onChange={onChange}
        ref={register}
      />
    </Label>
  )
}

Text.defaultProps = {
  value: '',
  name: '',
  type: 'text',
  label: '',
  placeholder: '',
  readOnly: false,
  onChange: () => {},
  register: () => {}
}

Text.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
  register: PropTypes.func
}

export default Text
