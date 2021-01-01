import React from 'react'
import { VideoPlayer } from '../../lib'

export default {
  title: 'Components/VideoPlayer/Default',
  component: VideoPlayer
}

const Template = (args) => <VideoPlayer {...args} />

export const Default = Template.bind({})
Default.args = {
  sources: [
    {
      src:
        'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
      type: 'video/mp4'
    }
  ],
  poster:
    'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217'
}
