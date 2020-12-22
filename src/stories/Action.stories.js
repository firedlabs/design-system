import React from 'react'
import { Action } from '../lib'

export default {
  title: 'Components/Action',
  component: Action
}

const Template = (args) => <Action {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'https://twitch.tv/marcobrunodev',
  href: 'https://twitch.tv/marcobrunodev'
}
