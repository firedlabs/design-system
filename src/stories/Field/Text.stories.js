import React from 'react'
import { Field } from '../../lib'

export default {
  title: 'Components/Field/Text',
  component: Field.Text,
  parameters: {
    layout: 'padded'
  }
}

const Template = (args) => <Field.Text {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Login',
  placeholder: 'Seu nick aqui',
  type: 'text',
  readOnly: false
}
