import React from 'react'
import { Loading } from '../lib'

export default {
  title: 'Components/Loading',
  component: Loading
}

const Template = (args) => <Loading {...args} />

export const Default = Template.bind({})
Default.args = {
  active: true
}
