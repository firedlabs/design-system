import React from 'react'
import PropTypes from 'prop-types'
import { Label, Content, Input } from '../styles'

function Email({ name, label, placeholder, readOnly, register }) {
  return (
    <Label>
      <Content>{label}</Content>
      <Input
        type="email"
        name={name}
        placeholder={placeholder}
        readOnly={readOnly}
        ref={register(name)}
      />
    </Label>
  )
}

Email.defaultProps = {
  label: 'Email',
  name: 'email',
  placeholder: 'seu_email@gmail.com',
  readOnly: false,
  register: () => {}
}

Email.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  readOnly: PropTypes.string,
  register: PropTypes.func
}

export default Email
