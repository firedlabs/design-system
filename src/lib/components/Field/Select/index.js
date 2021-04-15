import React from 'react'
import PropTypes from 'prop-types'
import { Label, Content } from '../styles'
import { Option, SelectStyle } from './styles'

function Select({
  name,
  label,
  value,
  onChange,
  defaultValue,
  options,
  register
}) {
  return (
    <Label>
      <Content>{label}</Content>
      <SelectStyle
        name={name}
        onChange={onChange}
        {...register(name)}
        value={value || defaultValue}
      >
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
  onChange: () => {},
  defaultValue: '',
  name: '',
  options: [''],
  register: () => {}
}

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  register: PropTypes.func
}

export default Select
