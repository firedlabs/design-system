import React from 'react'
import { Countdown } from '../lib'

export default {
  title: 'Components/Countdown',
  component: Countdown
}

const Template = (args) => <Countdown {...args} />

export const Default = Template.bind({})
Default.args = {
  paramLastDate: '2021-2-7'
}

export const MinSec = Template.bind({})
MinSec.args = {
  paramLastDate: '2021-2-7',
  day: false,
  hrs: false,
  min: true,
  sec: true
}
