import React from 'react'
import { Countdown } from '../lib'

export default {
  title: 'Components/Countdown',
  component: Countdown
}

const Template = (args) => <Countdown {...args} />

export const Default = Template.bind({})
Default.args = {
  day: {
    label: 'Dias',
    time: '01'
  },
  hrs: {
    label: 'Hrs',
    time: '20'
  },
  min: {
    label: 'Min',
    time: '10'
  },
  seg: {
    label: 'Seg',
    time: '10'
  }
}
