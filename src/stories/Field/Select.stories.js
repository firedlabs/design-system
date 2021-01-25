import React from 'react'
import { Field } from '../../lib'

export default {
  title: 'Components/Field/Select',
  component: Field.Select,
  parameters: {
    layout: 'padded'
  }
}

const Template = (args) => <Field.Select {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Tipos',
  name: 'types',
  options: ['admin', 'streamer']
}
