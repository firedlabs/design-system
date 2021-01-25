import React from 'react'
import PropTypes from 'prop-types'
import { Label, Content, Input } from '../styles'

function Email({ value, label, placeholder, readOnly, onChange, register }) {
  return (
    <Label>
      <Content>{label}</Content>
      <Input
        value={value}
        type="email"
        placeholder={placeholder}
        readOnly={readOnly}
        onChange={onChange}
        ref={register}
      />
    </Label>
  )
}

Email.defaultProps = {
  label: 'Email',
  placeholder: 'seu_email@gmail.com',
  readOnly: false,
  value: '',
  onChange: () => {},
  register: () => {}
}

Email.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  readOnly: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  register: PropTypes.func
}

export default Email
