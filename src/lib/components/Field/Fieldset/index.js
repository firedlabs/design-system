import React from 'react'
import PropTypes from 'prop-types'
import { FieldsetStyle, Legend, Wrapper } from './styles'

function Fieldset({ legend, children }) {
  return (
    <FieldsetStyle>
      {legend && <Legend>{legend}</Legend>}
      <Wrapper>{children}</Wrapper>
    </FieldsetStyle>
  )
}

Fieldset.defaultProps = {
  legend: ''
}

Fieldset.propTypes = {
  legend: PropTypes.string,
  children: PropTypes.element
}

export default Fieldset
