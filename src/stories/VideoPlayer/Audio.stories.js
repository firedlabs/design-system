import React from 'react'
import { Audio } from '../../lib'

export default {
  title: 'Components/VideoPlayer/Audio',
  component: Audio
}

const Template = (args) => <Audio {...args} />

export const Default = Template.bind({})
Default.args = {
  mute: false,
  onClick: () => {},
  handleVolume: () => {},
  volume: 50
}
