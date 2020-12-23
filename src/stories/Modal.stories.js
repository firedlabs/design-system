import React from 'react'
import { Modal, Button, Line } from '../lib'
import { Field } from '../lib/components/Field'

export default {
  title: 'Components/Modal',
  componet: Modal,
  parameters: {
    layout: 'fullscreen'
  }
}

const Template = (args) => <Modal {...args} />

const children = (
  <>
    <Button color="colorThird" backgroundColor="colorSecond">
      Twitch
    </Button>

    <Line />

    <Field.Email label="Email" />
    <Button>Enviar</Button>
  </>
)

export const Default = Template.bind({})
Default.args = {
  title: 'Confirme sua matrícula',
  children,
  active: true
}
