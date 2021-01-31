import React from 'react'
import { Field } from '../../lib'

export default {
  title: 'Components/Field/Checkbox',
  component: Field.Checkbox
}

const Template = (args) => <Field.Checkbox {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Follow',
  active: false,
  name: 'foollow',
  register: () => {},
  value: '',
  onClick: () => {}
}
