import React from 'react'
import { palette, Tag } from '../lib'

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    backgroundColor: {
      control: {
        type: 'select',
        options: Object.keys(palette)
      }
    },
    color: {
      control: {
        type: 'select',
        options: Object.keys(palette)
      }
    }
  }
}

const Template = (args) => <Tag {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'video',
  backgroundColor: 'colorThird',
  color: 'colorBlackFirst'
}
