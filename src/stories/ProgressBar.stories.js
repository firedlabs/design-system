import React from 'react'
import { palette, ProgressBar } from '../lib'

const colors = {
  control: {
    type: 'select',
    options: Object.keys(palette)
  }
}

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'padded'
  },
  argTypes: {
    boxShadow: {
      control: {
        type: 'select',
        options: [false, 'small']
      }
    },
    borderColor: colors,
    color: colors,
    barColor: colors,
    backgroundColor: colors
  }
}

const Template = (args) => <ProgressBar {...args} />

export const Default = Template.bind({})
Default.args = {
  valueNow: 60,
  valueMax: 100,
  boxShadow: false,
  borderColor: 'colorSecond',
  color: 'colorBlackFirst',
  barColor: 'colorSuccess',
  backgroundColor: 'colorThird'
}
