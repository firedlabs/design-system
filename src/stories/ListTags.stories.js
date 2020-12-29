import React from 'react'
import { ListTags } from '../lib'

export default {
  title: 'Components/ListTags',
  component: ListTags
}

const tags = [
  {
    children: 'video',
    backgroundColor: 'colorThird',
    color: 'colorBlackFirst'
  },
  {
    children: 'pdf',
    backgroundColor: 'colorThird',
    color: 'colorBlackFirst'
  }
]

const Template = (args) => <ListTags {...args} />

export const Default = Template.bind({})
Default.args = {
  tags
}
