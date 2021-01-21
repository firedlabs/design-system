import React from 'react'
import { Table } from '../lib'

export default {
  title: 'Components/Table',
  component: Table
}

const Template = (args) => <Table {...args} />

export const Default = Template.bind({})
Default.args = {
  columns: ['', 'Login', 'Twitter'],
  data: [
    [
      'https://static-cdn.jtvnw.net/jtv_user_pictures/d7f7a6aa-4376-4ebe-9c72-0a7edb0e9761-profile_image-300x300.png',
      'marcobrunodev',
      { content: 'twitter', href: 'https://twitter.com/marcobrunodev' }
    ]
  ]
}
