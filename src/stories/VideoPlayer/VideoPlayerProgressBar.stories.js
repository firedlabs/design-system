import React from 'react'
import { VideoPlayerProgressBar } from '../../lib'
import Wrapper from '../components/Wrapper'

export default {
  title: 'Components/VideoPlayer/VideoPlayerProgressBar',
  component: VideoPlayerProgressBar
}

const Template = (args) => <VideoPlayerProgressBar {...args} />

export const Default = (args) => (
  <Wrapper center>{Template.bind({})(args)}</Wrapper>
)
Default.args = {
  max: 320,
  value: 100,
  buffer: 180
}
