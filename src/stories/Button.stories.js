import React from 'react'
import { Button } from '../lib'

export default {
  title: 'Components/Button',
  component: Button
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Matrícula 100% free'
}
