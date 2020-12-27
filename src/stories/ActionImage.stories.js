import React from 'react'
import { ActionImage, palette } from '../lib'
import alura from './assets/alura.png'
import negros from './assets/negros.png'

export default {
  title: 'Components/ActionImage',
  component: ActionImage,
  argTypes: {
    backgroundColor: {
      control: {
        type: 'select',
        options: Object.keys(palette)
      }
    }
  }
}

const Template = (args) => <ActionImage src={alura} {...args} />

export const Default = Template.bind({})
Default.args = {
  href: 'https://alura.com.br',
  alt: 'Logo da Alura',
  backgroundColor: 'colorFirst'
}

export const ChangeColor = Template.bind({})
ChangeColor.args = {
  href: 'https://alura.com.br',
  alt: 'Logo da Alura',
  backgroundColor: 'colorThird',
  src: negros
}
