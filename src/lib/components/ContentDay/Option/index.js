import React from 'react'
import PropTypes from 'prop-types'
import { OptionStyle, Label, Description } from './styles'

function Option({ label, description, length, color }) {
  return (
    <OptionStyle length={length} color={color}>
      <Label>{label}</Label>
      <Description>{description}</Description>
    </OptionStyle>
  )
}

Option.propTypes = {
  label: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  color: PropTypes.string
}

export default Option
