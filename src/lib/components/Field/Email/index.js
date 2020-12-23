import React from 'react'
import PropTypes from 'prop-types'
import { Label, Content, Input } from '../styles'

function Email({ label }) {
  return (
    <Label>
      <Content>{label}</Content>
      <Input type="email" placeholder="seuemail@gmail.com" />
    </Label>
  )
}

Email.propTypes = {
  label: PropTypes.string.isRequired
}

export default Email
