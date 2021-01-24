import React from 'react'
import { Field } from '../../lib'

export default {
  title: 'Components/Field/Textarea',
  component: Field.Textarea,
  parameters: {
    layout: 'padded'
  }
}

const Template = (args) => <Field.Textarea {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Descrição'
}
