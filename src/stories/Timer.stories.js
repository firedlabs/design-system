import React from 'react'
import { Timer } from '../lib/components'

export default {
  title: 'Components/Timer',
  component: Timer
}

const Template = (args) => <Timer {...args} />

export const Default = Template.bind({})
Default.args = {
  time: '00',
  label: 'DIAS'
}
