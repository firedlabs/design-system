import React from 'react'
import { Section, palette } from '../lib'

export default {
  title: 'Components/Section',
  component: Section,
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    backgroundColor: {
      control: {
        type: 'select',
        options: Object.keys(palette)
      }
    },
    borderColor: {
      control: {
        type: 'select',
        options: Object.keys(palette)
      }
    }
  }
}

const Template = (args) => <Section {...args} />

export const Default = Template.bind({})
Default.args = {
  backgroundColor: 'colorFirst',
  borderColor: 'colorBlackFirst',
  medium: false,
  big: false,
  biggest: false
}

export const Medium = Template.bind({})
Medium.args = {
  backgroundColor: 'colorFirst',
  borderColor: 'colorBlackFirst',
  medium: true,
  big: false,
  biggest: false
}

export const Big = Template.bind({})
Big.args = {
  backgroundColor: 'colorFirst',
  borderColor: 'colorBlackFirst',
  medium: false,
  big: true,
  biggest: false
}

export const Biggest = Template.bind({})
Biggest.args = {
  backgroundColor: 'colorFirst',
  borderColor: 'colorBlackFirst',
  medium: false,
  big: false,
  biggest: true
}
