import React from 'react'
import { Profile } from '../lib'
import marco from './assets/marcobruno.png'

export default {
  title: 'Components/Profile',
  component: Profile
}

const Template = (args) => <Profile avatar={marco} {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'Marco Bruno',
  socialMedias: [
    {
      name: 'twitter',
      url: 'https://twitter.com/marcobrunodev'
    },
    {
      name: 'twitch',
      url: 'https://twitch.tv/marcobrunodev'
    },
    {
      name: 'youtube',
      url: 'https://youtube.com/collabcode'
    }
  ]
}
