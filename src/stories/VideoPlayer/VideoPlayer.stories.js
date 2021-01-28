import React from 'react'
import { VideoPlayer } from '../../lib'

export default {
  title: 'Components/VideoPlayer/Default',
  component: VideoPlayer
}

const Template = (args) => <VideoPlayer {...args} />

export const Default = Template.bind({})
Default.args = {
  sources: {
    src:
      'https://player.vimeo.com/external/490348141.hd.mp4?s=e473c83ba63929f71334bd4167fcf8be3fd59930&profile_id=175',
    type: 'video/mp4'
  },
  poster:
    'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217'
}

export const InBox = Template.bind({})
InBox.args = {
  box: true,
  sources: {
    src:
      'https://player.vimeo.com/external/504737839.hd.mp4?s=8212099bc1a53dcbc4e184f0dd787e4dce2f4f44&profile_id=169',
    type: 'video/mp4'
  },
  poster:
    'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217'
}

export const WithPlaylist = Template.bind({})
WithPlaylist.args = {
  sources: {
    src:
      'https://player.vimeo.com/external/490348141.hd.mp4?s=e473c83ba63929f71334bd4167fcf8be3fd59930&profile_id=175',

    type: 'video/mp4'
  },
  poster:
    'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217',
  lessons: [
    {
      title: 'Módulo 00',
      tag: '',
      videos: [
        {
          src:
            'https://player.vimeo.com/external/490348141.hd.mp4?s=e473c83ba63929f71334bd4167fcf8be3fd59930&profile_id=175',
          title: 'Projeto do curso',
          poster: 'https://i.vimeocdn.com/video/1027992089.jpg',
          type: 'video/mp4'
        },
        {
          src:
            'https://player.vimeo.com/external/490348213.hd.mp4?s=65af3df8e8f3339abf933b0cb1aea8e9a67c587e&profile_id=175',
          title: 'Pré-requisitos do curso',
          poster: 'https://i.vimeocdn.com/video/1027992089.jpg',
          type: 'video/mp4'
        },
        {
          src:
            'https://player.vimeo.com/external/490348393.hd.mp4?s=8734fcb0db1e45cde958fe2e34daea395c18e9b1&profile_id=175',
          title: 'Onde tirar suas dúvidas',
          poster: 'https://i.vimeocdn.com/video/1027992089.jpg',
          type: 'video/mp4'
        },
        {
          src:
            'https://player.vimeo.com/external/490348510.hd.mp4?s=b3c3e588fc32b8189be1d866ae27e43ef311f457&profile_id=175',
          title: 'Como funciona o VSCode',
          poster: 'https://i.vimeocdn.com/video/1027992089.jpg',
          type: 'video/mp4'
        },
        {
          src:
            'https://player.vimeo.com/external/490349544.hd.mp4?s=c25d851552a45d6799188b6983df9b8bcd2ec549&profile_id=175',
          title: 'Figma para Devs',
          poster: 'https://i.vimeocdn.com/video/1027992089.jpg',
          type: 'video/mp4'
        },
        {
          src:
            'https://player.vimeo.com/external/490349755.hd.mp4?s=daca5c077323b3bc97caa615b5c2dcbcef9a8080&profile_id=175',
          title: 'Revisão',
          poster: 'https://i.vimeocdn.com/video/1027992089.jpg',
          type: 'video/mp4'
        },
        {
          src:
            'https://player.vimeo.com/external/490349849.hd.mp4?s=5a01556b0267414d24988bcff741c7da270c7df4&profile_id=175',
          title: 'Desafios top top top',
          poster: 'https://i.vimeocdn.com/video/1027992089.jpg',
          type: 'video/mp4'
        }
      ]
    },
    {
      title: 'Módulo 01',
      tag: 'nova',
      videos: [
        {
          src:
            'https://player.vimeo.com/external/490348141.hd.mp4?s=e473c83ba63929f71334bd4167fcf8be3fd59930&profile_id=175',
          title: 'Projeto do curso',
          poster: 'https://i.vimeocdn.com/video/1027992089.jpg',
          type: 'video/mp4'
        }
      ]
    },
    {
      title: 'Módulo 02',
      tag: '10/02/2021',
      videos: [
        {
          src:
            'https://player.vimeo.com/external/490348141.hd.mp4?s=e473c83ba63929f71334bd4167fcf8be3fd59930&profile_id=175',
          title: 'Vídeos será liberado no dia 10/02/2021',
          poster: 'https://i.vimeocdn.com/video/1027992089.jpg',
          type: 'video/mp4'
        }
      ]
    }
  ],
  lessonActive: 'Módulo 01'
}
