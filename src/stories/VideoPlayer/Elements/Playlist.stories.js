import React from 'react'
import { Playlist } from '../../../lib'
import Wrapper from '../../components/Wrapper'

export default {
  title: 'Components/VideoPlayer/Elements/Playlist',
  component: Playlist
}

const Template = (args) => (
  <Wrapper bottom>
    <Playlist {...args} />
  </Wrapper>
)

export const Default = Template.bind({})
Default.args = {
  lessons: [
    {
      title: 'Aula 00',
      videos: [
        {
          poster:
            'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217',
          title: 'Video aula 00'
        }
      ]
    },
    {
      title: 'Aula 01',
      videos: [
        {
          poster:
            'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217',
          title: 'Video aula 01'
        }
      ]
    },
    {
      title: 'Aula 02',
      videos: [
        {
          poster:
            'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217',
          title: 'Video aula 02'
        }
      ]
    }
  ],
  playlistOpen: true
}
