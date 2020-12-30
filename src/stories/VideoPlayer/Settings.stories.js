import React from 'react'
import { Settings } from '../../lib'

export default {
  title: 'Components/VideoPlayer/Settings',
  component: Settings
}

const Template = (args) => <Settings {...args} />
const velocities = ['0.25', '0.5', '0.75', '1', '1.25', '1.5', '1.75', '2']

export const Default = Template.bind({})
Default.args = { velocities }
