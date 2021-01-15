import React from 'react'
import { Field } from '../../lib'

export default {
  title: 'Components/Field/Email',
  component: Field.Email,
  parameters: {
    layout: 'padded'
  }
}

const Template = (args) => <Field.Email {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Email',
  placeholder: 'seu_email@gmail.com',
  readOnly: false
}

export const Disable = Template.bind({})
Disable.args = {
  label: 'Email',
  placeholder: 'seu_email@gmail.com',
  value: 'marco.bruno.br@gmail.com',
  readOnly: true
}
