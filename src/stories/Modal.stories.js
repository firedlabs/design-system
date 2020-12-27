import React from 'react'
import { Modal, Button, Line, Field } from '../lib'

export default {
  title: 'Components/Modal',
  componet: Modal,
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    onClick: { action: 'clicked' }
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
  active: true,
  actionClose: () => {}
}
