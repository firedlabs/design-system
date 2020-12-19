import React from 'react'
import { Box } from '../lib'
import thumb from './assets/thumb.png'

export default {
  title: 'Components/Box',
  component: Box,
  parameters: {
    layout: 'padded'
  }
}

const Template = (args) => <Box {...args} />

export const Default = Template.bind({})
Default.args = {
  light: false
}

export const Light = Template.bind({})
Light.args = {
  light: true
}

export const Image = Template.bind({})
Image.args = {
  light: false,
  src: thumb,
  alt: 'Inscrição abertas para o curso de HTML e CSS'
}
Image.parameters = {
  layout: 'centered'
}

export const Content = Template.bind({})
Content.args = {
  light: false,
  children:
    'Será uma semana de conteúdo com uma aula nova todos os dias, começando no dia 08/02/2021. As aula serão liberadas às 06:32 da madrugada na FiredLabs e terá plantão de dúvidas ao vivo às 17:33 na twitch.tv/marcobrunodev todos os dias durante a semana do curso.'
}
