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
  borderColor: 'colorBlackFirst'
}
