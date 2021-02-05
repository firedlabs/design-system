import React from 'react'
import { Field } from '../../lib'

export default {
  title: 'Components/Field/Fieldset',
  component: Field.Fieldset,
  parameters: {
    layout: 'padded'
  }
}

const Template = (args) => (
  <Field.Fieldset {...args}>
    <Field.Checkbox>Exemplo</Field.Checkbox>
  </Field.Fieldset>
)

export const Default = Template.bind({})

export const WithLegend = Template.bind({})
WithLegend.args = {
  legend: 'Exemple de Legend'
}
