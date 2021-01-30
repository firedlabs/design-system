import React from 'react'
import { Form, Field, Button } from '../lib'

export default {
  title: 'Components/Form',
  component: Form,
  parameters: {
    layout: 'padded'
  }
}

const children = (
  <>
    <Field.Text label="Nome" name="name" />
    <Field.Textarea label="Descrição" name="description" />

    <Button type="submit" medium>
      Enviar
    </Button>
  </>
)

const Template = (args) => <Form {...args} />

export const Default = Template.bind({})
Default.args = {
  children,
  small: false,
  medium: false,
  big: false,
  biggest: false
}
