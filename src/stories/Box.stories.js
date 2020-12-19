import React from 'react'
import { Box } from '../lib'
import thumb from './assets/thumb.png'

export default {
  title: 'Components/Box',
  component: Box,
  parameters: {
    layout: 'padded'
  }
}

const Template = (args) => <Box {...args} />

export const Default = Template.bind({})
Default.args = {
  light: false
}

export const Light = Template.bind({})
Light.args = {
  light: true
}

export const Image = Template.bind({})
Image.args = {
  light: false,
  src: thumb,
  alt: 'Inscrição abertas para o curso de HTML e CSS'
}
Image.parameters = {
  layout: 'centered'
}
