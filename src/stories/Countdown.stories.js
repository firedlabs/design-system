import React from 'react'
import { Countdown } from '../lib'

export default {
  title: 'Components/Countdown',
  component: Countdown
}

const Template = (args) => <Countdown {...args} />

export const Default = Template.bind({})
Default.args = {
  paramLastDate: '2022-12-22T12:26:00'
}

export const MinSec = Template.bind({})
MinSec.args = {
  paramLastDate: '2022-12-22T12:26:00',
  day: false,
  hrs: false,
  min: true,
  sec: true
}
