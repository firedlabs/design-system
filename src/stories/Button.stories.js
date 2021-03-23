import React from 'react'
import { Button, palette } from '../lib'

export default {
  title: 'Components/Button',
  component: Button,
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

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Matrícula 100% free',
  backgroundColor: 'colorFirst',
  color: 'colorThird',
  medium: false,
  small: false,
  loading: false
}

export const Loading = Template.bind({})
Loading.args = {
  children: 'Matrícula 100% free',
  backgroundColor: 'colorFirst',
  color: 'colorThird',
  medium: false,
  small: false,
  loading: true
}

export const Medium = Template.bind({})
Medium.args = {
  children: 'Version medium',
  backgroundColor: 'colorFirst',
  color: 'colorThird',
  medium: true,
  small: false,
  loading: false
}

export const Small = Template.bind({})
Small.args = {
  children: 'Version medium',
  backgroundColor: 'colorFirst',
  color: 'colorThird',
  medium: false,
  small: true,
  loading: false
}
