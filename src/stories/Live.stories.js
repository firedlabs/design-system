import React from 'react'
import { Live } from '../lib'

export default {
  title: 'Components/Live',
  component: Live
}

const Template = (args) => <Live {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Live'
}
