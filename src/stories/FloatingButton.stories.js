import React from 'react'
import { FloatingButton } from '../lib'

export default {
  title: 'Components/FloatingButton',
  component: FloatingButton
}

const Template = (args) => <FloatingButton {...args} />

export const Default = Template.bind({})
Default.args = {
  children: '+'
}
