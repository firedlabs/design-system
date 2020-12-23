import React from 'react'
import { Field } from '../../../lib'

export default {
  title: 'Components/Field/Email',
  component: Field.Email
}

const Template = (args) => <Field.Email {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Email'
}
