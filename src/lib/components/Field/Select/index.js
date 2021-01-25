import React from 'react'
import PropTypes from 'prop-types'
import { Label, Content } from '../styles'
import { Option, SelectStyle } from './styles'

function Select({ name, label, value, defaultValue, options, register }) {
  return (
    <Label>
      <Content>{label}</Content>
      <SelectStyle name={name} ref={register()} value={value || defaultValue}>
        {options.map((option) => (
          <Option key={option} value={option}>
            {option}
          </Option>
        ))}
      </SelectStyle>
    </Label>
  )
}

Select.defaultProps = {
  label: '',
  value: '',
  defaultValue: '',
  name: '',
  options: [''],
  register: () => {}
}

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  register: PropTypes.func
}

export default Select
