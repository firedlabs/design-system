import React from 'react'
import marco from './assets/marcobruno.png'
import { Image, palette } from '../lib'

export default {
  title: 'Components/Image',
  component: Image,
  argTypes: {
    borderColor: {
      control: {
        type: 'select',
        options: Object.keys(palette)
      }
    }
  }
}

const Template = (args) => (
  <Image src={marco} alt="Avatar do Marco Bruno" {...args} />
)

export const Default = Template.bind({})
Default.args = {
  borderColor: 'colorFirst'
}
