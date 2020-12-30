import React from 'react'
import { Controls } from '../../lib'

export default {
  title: 'Components/VideoPlayer/Controls',
  component: Controls,
  parameters: {
    layout: 'fullscreen'
  }
}

const velocities = ['0.25', '0.5', '0.75', '1', '1.25', '1.5', '1.75', '2']

const Template = (args) => <Controls {...args} />

export const Default = Template.bind({})
Default.args = {
  velocities,
  duration: 600,
  progress: 200,
  buffer: 360
}
