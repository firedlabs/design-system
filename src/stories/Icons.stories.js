import React from 'react'
import { Icons } from '../lib'

export default {
  title: 'Components/Icons',
  component: Icons,
  argTypes: {
    name: {
      control: {
        type: 'select',
        options: ['html', 'css', 'twitter', 'twitch', 'youtube']
      }
    }
  }
}

const Template = (args) => <Icons {...args} />

export const Html = Template.bind({})
Html.args = {
  name: 'html'
}

export const Css = Template.bind({})
Css.args = {
  name: 'css'
}

export const Twitter = Template.bind({})
Twitter.args = {
  name: 'twitter'
}

export const Twitch = Template.bind({})
Twitch.args = {
  name: 'twitch'
}

export const Youtube = Template.bind({})
Youtube.args = {
  name: 'youtube'
}
