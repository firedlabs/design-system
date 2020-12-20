import React from 'react'
import marco from './assets/marcobruno.png'
import { Image, palette } from '../lib'
import Wrapper from './components/Wrapper'

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
  },
  parameters: {
    layout: 'padded'
  }
}

const Template = (args) => (
  <Wrapper>
    <Image src={marco} alt="Avatar do Marco Bruno" {...args} />
  </Wrapper>
)

export const Default = Template.bind({})
Default.args = {
  borderColor: 'colorFirst'
}
