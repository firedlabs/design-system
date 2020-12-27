import React from 'react'
import PropTypes from 'prop-types'
import { Label, Content, Input } from '../styles'

function Email({ label, placeholder }) {
  return (
    <Label>
      <Content>{label}</Content>
      <Input type="email" placeholder={placeholder} />
    </Label>
  )
}

Email.defaultProps = {
  label: 'Email',
  placeholder: 'seu_email@gmail.com'
}

Email.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string
}

export default Email
