import React from 'react'
import { Heading } from '../lib/components'

export default {
  title: 'Components/Heading',
  component: Heading
}

const Template = (args) => <Heading {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Curso Feliz de HTML e CSS'
}
