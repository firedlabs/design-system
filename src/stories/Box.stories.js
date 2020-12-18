import React from 'react'
import { Box } from '../lib'

export default {
  title: 'Components/Box',
  component: Box
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
