import React from 'react'
import { Title } from '../lib'

export default {
  title: 'Components/Title',
  component: Title
}

const Template = (args) => <Title {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Matrícula acaba em...'
}
