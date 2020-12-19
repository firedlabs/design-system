import React from 'react'
import { ActionImage } from '../lib'
import alura from './assets/alura.png'

export default {
  title: 'Components/ActionImage',
  component: ActionImage
}

const Template = (args) => <ActionImage {...args} src={alura} />

export const Default = Template.bind({})
Default.args = {
  href: 'https://alura.com.br',
  alt: 'Logo da Alura'
}
