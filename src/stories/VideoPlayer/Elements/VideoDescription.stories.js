import React from 'react'
import { VideoDescription } from '../../../lib'

export default {
  title: 'Components/VideoPlayer/Elements/VideoDescription',
  component: VideoDescription
}

const Template = (args) => <VideoDescription {...args} />

export const Default = Template.bind({})
Default.args = {
  num: '#01',
  poster:
    'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217',
  title: 'Video feliz dos bixinhos'
}
