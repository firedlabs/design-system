import React from 'react'
import { VideoPlayerTimer } from '../../lib'

export default {
  title: 'Components/VideoPlayer/VideoPlayerTimer',
  component: VideoPlayerTimer
}

const Template = (args) => <VideoPlayerTimer {...args} />

export const Default = Template.bind({})
Default.args = {
  currentTime: 130,
  duration: 320
}
