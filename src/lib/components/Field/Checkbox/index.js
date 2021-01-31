import React from 'react'
import PropTypes from 'prop-types'
import { Check, CheckboxStyle, Content, Icon } from './styles'

function Checkbox({ children, active, name, register, value, onClick }) {
  return (
    <CheckboxStyle active={active} onClick={onClick}>
      <Check ref={register} name={name} value={value} defaultChecked={active} />
      <Icon />
      <Content>{children}</Content>
    </CheckboxStyle>
  )
}

Checkbox.defaultProps = {
  active: false,
  onClick: () => {},
  value: ''
}

Checkbox.propTypes = {
  children: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  value: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool
}

export default Checkbox
